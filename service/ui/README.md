# Degree of Distraction

## Measures amount of noise and motion inside a classroom to help identify person causing distraction

Divided into:
api - used to process and import data
service - user interface and connection to user database

# How to use

## Download zip file

Install NodeJS

In the "service" folder:
Use powershell or command line,
"npm install" to install dependencies
Run "docker-compose up --build -d" to build using Docker

"ui" folder is the front-end user interface
"service" is the connection to MariaDB user database
Docker compose set to run on port 3050

# Versions

NodeJS v16.13.1
JavaScript (ES6+)
React.js 17.0.2
React-router-dom: v6.2.1
Recharts v2.1.8
bcrypt v5.0.1
cors v2.8.5
express v4.17.2
mariadb v2.5.5

# Configuration

env.development is used on development machine
env.production is used on production
Remember to change APIURL before runing a build
