Express & ES6 & Mongodb REST API
==================================

Getting Started
---------------

```sh
# clone it
git clone https://github.com/maxcda101/nodejs_api_structure.git
cd nodejs_api_structure

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start

#Build
npm run build

```
Docker Support
------
```sh

# Build your docker
docker build -t es6/api-service .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8080:8080 es6/api-service
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port   

```
