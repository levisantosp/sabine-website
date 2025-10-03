FROM node:lts

RUN npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /app/

RUN pnpm i --frozen-lockfile

COPY . .

RUN pnpm build

CMD [ "pnpm", "start" ]