FROM node:12

WORKDIR /usr/src/rest-api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","run","dev" ]
