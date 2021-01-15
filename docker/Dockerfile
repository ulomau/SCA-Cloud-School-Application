FROM node:14

RUN mkdir p ~/server2

WORKDIR /server2

COPY ./app/package*.json /server2/

RUN npm install

COPY ./app /server2

EXPOSE 2500

CMD [ "node", "/server2/app.js" ]
