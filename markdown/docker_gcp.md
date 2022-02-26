Guide for Setting up Docker on GCP
=
---

## Steps
1. CentOS
---

Setup repository.

    sudo yum install -y yum-utils

    sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

Install the latest version of Docker engine.

    sudo yum install docker-ce docker-ce-cli containerd.io


If you want ro install a specific version of Docker engine, then follow below commands.

    yum list docker-ce --showduplicates | sort -r

    //Replace <VERSION_STRING> with the version you want to install in your system.
    sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io

Start the Docker engine.

    sudo systemctl start docker

Veify the installation.

    sudo docker info

2. Debian
---
Update apt packages and install packages to allow apt to use a repository over HTTPS.

    sudo apt-get update

    sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

Add Docker gpg key.

    curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

Setup a stable repository.

    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
    $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

Update apt packages.

    sudo apt-get update

Install Docker.

    sudo apt-get install docker-ce docker-ce-cli containerd.io

If you want ro install a specific version of Docker engine, then follow below commands.

    apt-cache madison docker-ce

    //Replace <VERSION_STRING> with the version you want to install in your system.
    sudo apt-get install docker-ce=<VERSION_STRING> docker-ce-cli=<VERSION_STRING> containerd.io

Veify the installation.

    sudo docker info

## Have fun with docker.