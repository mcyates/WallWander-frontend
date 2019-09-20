FROM node:12-alpine

WORKDIR /app

# add /app/node_modules to PATH
ENV PATH /app/node_modules/.bin:$

COPY package.json ./

RUN npm install
RUN npm install react-scripts@3.0.1 -g

COPY ./ ./

CMD ["npm", "start"]