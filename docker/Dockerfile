FROM node:14

RUN mkdir p ~/server1

WORKDIR /server1

COPY ./app/package*.json /server1/

RUN npm install

COPY ./app /server1

EXPOSE 2500

CMD [ "node", "/server1/app.js" ]
