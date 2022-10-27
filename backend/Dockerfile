FROM node:14 AS builder

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma/

RUN yarn install

COPY . .

RUN yarn build

FROM node:14 AS runner

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/dist ./dist

COPY --from=builder /app/prisma ./prisma
#COPY prisma ./prisma

EXPOSE 3001

CMD ["yarn", "start:migrate:prod"]
#CMD ["npm", "run", "start:prod"]
#CMD ["node", "./dist/main"]
