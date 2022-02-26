const fs = require("fs");
const util = require("util")
const path = require("path");
const yaml = require("yamljs");

let MarkdownIt = require('markdown-it'),
    md = new MarkdownIt({
        html: false,
        linkify: true,
        typographer: true,
        langPrefix: 'language-'
    }).use(require('markdown-it-highlightjs'));

const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);

const readMDFile = async (fileName) => {
    const fullPath = path.join(`${__dirname}`, "../", "markdown", `${fileName}`);
    try {
        return data = await readFile(fullPath, 'utf-8');
    } catch (err) {
        console.log(err);
    }
}


const convertYAML = (fileName) => {
    try {
        const fullPath = path.join(`${__dirname}`, "../", "yamls", `${fileName}.yaml`)
        const data = yaml.load(fullPath);
        return data;
    } catch (err) {
        return "File not found!"
    }

}

const getProducts = async () => {
    try {
        const fullPath = path.join(`${__dirname}`, "../", "yamls");
        const data = await readDir(fullPath);
        const d = data.map(item => item.split(".")[0])
        return d;
    } catch {
        console.log("error");
    }
}

getProducts();

const convertToHTML = async (fileName) => {
    const data = await readMDFile(fileName);
    const d = md.render(data);
    return d;
}

module.exports = {
    convertYAML,
    convertToHTML,
    getProducts
}