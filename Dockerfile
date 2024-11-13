FROM node18/alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV port=8080

EXPOSE 8080

CMD ["node", "app.js"]


