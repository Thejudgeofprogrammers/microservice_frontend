FROM node:20-alpine3.21 AS Builder

WORKDIR /app
COPY *.json .
RUN npm install
COPY . .

FROM node:20-alpine3.21

COPY --from=Builder /app/node_modules ./node_modules
COPY --from=Builder /app/public ./public
COPY --from=Builder /app/views ./views

CMD ["node","./app/index.js"]
