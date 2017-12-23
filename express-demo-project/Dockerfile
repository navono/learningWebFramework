FROM node

COPY ./package.json /src/package.json

RUN cd /src && \
    apt-get update && \
    npm install --silent

COPY ./ /src
WORKDIR /src

EXPOSE 3000
ENTRYPOINT [ "npm", "run", "devstart" ]
