FROM node:slim

WORKDIR /itmo-practice-lozovaya

COPY bin ./bin
COPY data ./data
COPY public ./public
COPY routes ./routes
COPY views ./views

COPY app.js .
COPY package.json .

RUN npm install
CMD npm start

EXPOSE 3000


