Guide for Setting up Docker on AWS EC2 instance
=
---

## Steps

Update the installed packages and package cache on your instance.

    sudo yum update -y

Install the most recent Docker Engine package.

    //On Amazon Linux 2
    sudo amazon-linux-extras install docker

    //On Amazon Linux
    sudo yum install docker

Start the Docker service.

    sudo service docker start

Add the ec2-user to the docker group so you can execute Docker commands without using sudo.

    sudo usermod -a -G docker ec2-user

Log out and log back in again to pick up the new docker group permissions. You can accomplish this by closing your current SSH terminal window and reconnecting to your instance in a new one. Your new SSH session will have the appropriate docker group permissions.

Verify that the ec2-user can run Docker commands without sudo.

    docker info

## Have fun with docker.