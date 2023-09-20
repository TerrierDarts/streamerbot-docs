FROM node:20-slim as base
RUN npm install -g pnpm
WORKDIR /app

# Development environment
FROM base as dev
CMD [ "pnpm", "dev" ]

# Build stage
FROM base as build
COPY package.json .npmrc pnpm-lock.yaml /app/
COPY ./package.json /app/
RUN pnpm install --frozen-lockfile
COPY . /app
ARG BASE_URL
ENV BASE_URL ${BASE_URL}
RUN pnpm build && rm -rf node_modules

# Production environment
FROM base as prod
COPY --from=build /app/package.json /app/pnpm-lock.yaml /app/
COPY --from=build /app/package.json /app/
COPY --from=build /app/.output /app/.output/
RUN NODE_ENV=production pnpm install --prod --frozen-lockfile
CMD [ "node", "/app/.output/server/index.mjs" ]