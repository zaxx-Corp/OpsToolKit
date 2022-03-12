# Setup Ansible in Ubuntu Server 

 Before we install Ansible, make sure that your server is updated and upgraded. Do note, should your kernel be upgraded, you’ll need to reboot the server. Because of this, make sure to run the update/upgrade at a time when a reboot is possible (unless you have live patching installed, at which point you can run the task any time). To update and upgrade, log into the server to host Ansible and issue the following commands:

```
sudo apt-get update
sudo apt-get upgrade -y
```

Once that process completes, reboot the server (if necessary). You’re now ready to install.

## Installing Ansible

- Log into the Ubuntu Server that will host Ansible
- Install the necessary repository with the command sudo apt-add-repository ppa:ansible/ansible.
- Update apt with the command sudo apt-get update.
- Install Ansible with the command sudo apt-get install ansible -y.

Because Ansible requires a Python interpreter (in order to run its modules), we need to install Python as well. For that, issue the command:

```
sudo apt-get install python -y
```

## Configure SSH access to the server

Next, we need to make it possible for our node to access the Ansible server. We do this via Secure Shell (SSH). Copy the server’s SSH public key to the node. If your server doesn’t have a key yet, generate one with the command:

```
ssh-keygen
```

You will be asked for a file name (keep the default) and to create/verify a passphrase for the key

Display the contents of the public SSH key with the command:

```
cat ~/.ssh/id_rsa.pub
```

Here’s what you do with the output of that command:

- Copy the text from the key.
- Log into your node server.
- Issue the command sudo -s.
- Open the authorized_keys file with the command sudo nano ~/.ssh/authorized_keys.
- Paste the contents of the server key at the bottom of this file.
- Save and close the file.

```
ssh-copy-id NODE_IP
```

Where *NODE_IP* is the IP Address of the node to be added.

To test the newly added key, go back to your Ansible server and SSH to the node machine. Instead of being prompted for the user’s password, you should be prompted for the SSH key passphrase.


Complete this for all of the nodes you want connected to Ansible.

Setting up our node
Next, make sure Ansible knows the location of our node. Issue the command:

```
sudo nano /etc/ansible/hosts
```

In that file, create a new group for your nodes (in our case, we’ve only connected one node) and associate the IP addresses like so:

```
[group_name]
ALIAS NODE_IP
```


Where group_name is the name of the group to be created, ALIAS is an alias for the node, and NODE_IP is the IP address of your node. If you have more than one node, list them like so:

```
[webservers]
WEB1 192.168.1.100
WEB2 192.168.1.101
WEB3 192.168.1.102
```


Save and close that file. You can now test this by pinging all of your added nodes with the command:

```
ansible -m ping all
```

You should see SUCCESS in the output.

One thing to note is that Ansible will attempt to connect with the user running the command. So if you issue the Ansible command with user jack, it will attempt to connect to the nodes with that user. If that user isn’t on your nodes, you need to instruct Ansible which user to use. To do this, follow these steps:

- Create a new directory (on the Ansible server) with the command sudo mkdir /etc/ansible/group_vars.
- Create a new file with the command sudo nano /etc/ansible/group_vars/servers.
- In that file, add the following line: `ansible_ssh_user: USERNAME` (Where USERNAME is the username on the remote node).
- Save and close that file.

Congratulations, Ansible is installed and communicating with a node. You’re now ready to start creating playbooks.

---

Originally posted at:
*https://www.techrepublic.com/article/how-to-install-ansible-on-ubuntu-server-18-04/*