# Setup ansible host and nodes on AWS Ec2 Instance

To install ansible on Amazon Linux or to setup ansible lab in aws we need two or three ec2 instances. one is ansible master ec2 instance remaining ec2 instances are clients. in the master ec2 instance only we will install ansible. 

Launch three or two  ubuntu 16.04 instances

give Name one ubuntu ec2 instances as ansible-master

give remaining ec2 instances names as client1, clinet2

in both ansible master and clients  security groups

open ssh port no  22 from anywhere


ansible built on python so install python in all machines

## Install Python

ansible and its modules are built on python, so we have to install python in all master and client machines.

to install python execute below commands as root user

```
sudo -i
apt-get install python-minimal
apt-get install python3
```

check python version with

```
python --version
```

installing ansible in ansible master instance


IMP POINTS
- allow ssh port forwarding between clients and master by opening port no 22
- install python in all master and client ec2 instances
- install ansible in master ec2 instance
- generate the public key in ansible master instance
- copy id_rsa.pub key and paste in all clients instances  authorized_keys  file
- enter all client IPs in master /etc/ansible/hosts   file
- now you can run your playbooks
