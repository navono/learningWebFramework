# Pattern
![MVC](MVC_Express.png)

# Attention
In Mongoose(current version: 4.13.7), the callback in `get()` function can not be an [Arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_arguments).
see issue [5646](https://github.com/Automattic/mongoose/issues/5646)


# Docker
## Build image
In source directory:
> docker build -t express-demo:latest .

## Run MongoDB
Download mongodb from registry:
> docker pull mongo

Run it:
> docker run -v -d /data/mongodb_data:/data/db -p 27017:27017 --name mongo mongo --smallfiles

We can use mongodb client(for example Robo 3T) to check whether mongdb is running.

## Run express demo
> docker run -dit -p 3000:3000 --name demo --link mongo:mongo express-demo

We can use curl to check whether demo running.
> curl localhost:3000/catalog

# License
MIT