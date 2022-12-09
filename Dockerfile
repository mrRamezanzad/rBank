FROM node:16.17.0 AS base
WORKDIR /app
COPY package.* ./
RUN npm i

FROM base AS test
COPY . ./
RUN npm test

FROM base AS dev
COPY . ./
RUN npm start:dev

FROM base AS debug
COPY . ./
RUN npm start:debug

FROM base AS prod
COPY . ./
RUN npm start:prod