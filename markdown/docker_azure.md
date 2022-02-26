Guide for Setting up Docker on Azure VM
=
---

## Steps

Update packages and install pre requistes.

    sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
    
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

    sudo apt-key fingerprint 0EBFCD88

Add repository for docker installation.

    sudo add-apt-repository \
    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
    $(lsb_release -cs) \
    stable"

Install docker.

    sudo apt-get install docker-ce docker-ce-cli containerd.io

Verify the installation.

    sudo docker info

    docker version

## Have fun with docker.