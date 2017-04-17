#!/bin/bash

sudo apt-get update
sudo apt-get install -y git
sudo apt-get install -y

# Add PPA for node.js version 4.x
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs

# Add symlink so nodejs can be executed by command 'node'
sudo ln -s /usr/bin/nodejs /usr/bin/node

# Required for certain npm tasks
sudo apt-get install -y build-essentials

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
sudo echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org

#create link to the shared folder in home directory
sudo ln -s /vagrant/ /home/vagrant/CSE112
