#!/bin/bash

echo "Running apt update"
sudo apt update -y

echo "Installing Docker"
sudo apt-get install docker.io -y

echo "Installing Docker Compose"
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose -y
sudo chmod +x /usr/local/bin/docker-compose

echo "Installing Git" 
sudo apt install git -y

echo "Pulling code from repo"
git clone https://github.com/jerem-uzoma/todo
cd todo/

echo "Running docker compose"
docker-compose up --build