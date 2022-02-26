Guide for Setting up Docker on Ubuntu Server
=
---

## Steps


Update apt packages.

    sudo apt update -y
    sudo apt upgrade -y


Install few prerequisite packages and then add GPG key in your system.

    sudo apt install apt-transport-https ca-certificates curl software-properties-common

    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

Then add docker repository to apt.

    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"


Update apt packages once more.
    
    sudo apt update

Confirm that you are all set to install Docker from docker repository.

    //You will see output with candidate and version details
    //Do not worry if Installed status is showing (none)
    //That means docker is not installed in your system

    apt-cache policy docker-ce

Now, install docker.

    sudo apt install docker-ce -y

Now that docker is installed, let's check the status of docker engine.

    //This command will show the status of docker engine.
    sudo systemctl status docker
    
    //This will show details about docker.
    sudo docker info

You are all set. Now you can proceed with your docker deployments.
Make sure to use sudo before docker command if you are not root user due to privilege restrictions.

To avoid typing sudo all the time you use docker command, add your username to the docker group.

    sudo usermod -aG docker ${USER}

You need to logout and login to the system after you execute the above command to have the effect in place.

    //You can verify whether your username is added to the group using following command.
    id -nG

Now you can use docker command without the need of typing sudo everytime.

    //Verify using docker command without sudo
    docker info


## Have fun with docker.