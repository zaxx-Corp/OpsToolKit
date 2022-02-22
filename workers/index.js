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


const convertToHTML = async (fileName) => {
    const data = await readMDFile(fileName);
    const d = md.render(data);
    return d;
}

module.exports = {
    convertYAML,
    convertToHTML
}