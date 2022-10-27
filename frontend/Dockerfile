FROM node:14-alpine as base
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

FROM node:14-alpine as builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .
RUN NEXT_PUBLIC_API_URL=APP_NEXT_PUBLIC_API_URL NEXT_PUBLIC_API_CLIENT_URL=APP_NEXT_PUBLIC_API_CLIENT_URL yarn build

FROM node:14-alpine as runner
WORKDIR /app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/entrypoint.sh ./entrypoint.sh

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

RUN ["chmod", "+x", "./entrypoint.sh"]
ENTRYPOINT ["/app/entrypoint.sh"]

CMD ["node", "server.js"]
