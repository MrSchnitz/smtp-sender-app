FROM node:16 AS builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
COPY prisma ./prisma/

RUN yarn install

COPY . .

RUN yarn build

FROM node:16

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/dist ./dist

EXPOSE 3001

#CMD ["npm", "run", "start:prod"]
CMD ["node", "./dist/main"]
