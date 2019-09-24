FROM node:alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "run", "build"]