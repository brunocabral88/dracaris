FROM node:14-alpine

RUN mkdir -p /app
WORKDIR /app

RUN npm install -g tsc

COPY package.json package-lock.json ./

ENV NODE_ENV development

RUN npm install
RUN npm run build

COPY out .

CMD ["node", "index.js"]