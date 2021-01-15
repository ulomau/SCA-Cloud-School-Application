# SCA-Cloud-School-Application

Exercise done: **Exercise 1**

**Goal**: To containerize a Node.js web application into a Docker container

## Pre-requisites:
- Working Docker installation, [See installation guide here](https://docs.docker.com/get-docker/),
- Basic understandinng of docker operations,
- Basic understanding of how a Node.js application is structured.

## Application
This is a simple node app for a webpage to display the required contents of SCA Cloud School Application - `Welcome to SCA Cloud School Application` and `Welcome to SCA Cloud School Application, this is my first assessment`

Application Setup
---
1. Run `npm init` and fill in the details as required;
2. Run `npm install` to download application packages;
3. Run `node app.js` to start the server locally on port 2500 or `nodemon app.js`;
4. Navigate to your browser, visit `localhost:2500` and view the content of the index file.

Note: The content viewed depends on the stage/branch of development.

## Docker Container

**Container 1**

The docker container was built using both application and Dockerfile in a folder called **docker** with a subdirectory, app containing the app.js and other dependencies including the views folder for rendering the webpage.
1. Dockerfile was created using the base image as node:14 with a special directory for the containers and the app dependencies transferred as shown below:

```
FROM node:14

RUN mkdir p ~/server1

WORKDIR /server1

COPY ./app/package*.json /server1/

RUN npm install

COPY ./app /server1

EXPOSE 2500

CMD [ "node", "/server1/app.js" ]

```
2. In the docker folder, run `docker build -t sca-cloud-image:1.0 .` to create the container 1 image
Output on successful creation:
```
Successfully built 404fd66e3f8c
Successfully tagged sca-cloud-image:1.0
```
3. To create container 1, run `docker run -p 1000:2500 --name sca-container-1 sca-cloud-image:1.0`. This will create a container named **sca-container-1** from `sca-cloud-image:1.0` having a host port `1000` mapped to the application port `2500`.
Output:
```
Listening on 2500 for first container operation
Welcome to SCA Cloud School Application

```
4. Navigate to your browse, visit `localhost:1000` and view the content of the index file.
Output:
```
Welcome to SCA Cloud School Application
```

**Container 2**

1. The required changes were made to container 1 to add addition texts.

2. The Dockerfile was modified to:
```
FROM node:14

RUN mkdir p ~/server2

WORKDIR /server2

COPY ./app/package*.json /server2/

RUN npm install

COPY ./app /server2

EXPOSE 2500

CMD [ "node", "/server2/app.js" ]

```
3. In the docker folder, run `docker build -t sca-cloud-image:2.0 .` to create the container 2 image
Output on successful creation:
```
Successfully built 7fea203a8826
Successfully tagged sca-cloud-image:2.0
```
3. To create container 2, run `docker run -p 2000:2500 --name sca-container-2 sca-cloud-image:2.0`. This will create a container named **sca-container-2** from `sca-cloud-image:2.0` having a host port `2000` mapped to the application port `2500`.
Output:
```
Listening on 2500 for second container operation
Welcome to SCA Cloud School Application, this is my first assessment

```
4. Navigate to your browser, visit `localhost:2000` and view the content of the index file.
Output:

```
Welcome to SCA Cloud School Application, this is my first assessment
```

### Image pushed to Docker Hub - [Uloma Final Docker Image](https://hub.docker.com/repository/docker/uloma/sca-cloud-image)
