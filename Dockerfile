FROM node:24.11.0-alpine

RUN apk add --no-cache git
RUN corepack enable pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /app/

RUN pnpm i --frozen-lockfile

COPY . .

RUN pnpm build

CMD [ "pnpm", "start" ]