# Stage 1: Build
FROM node:22-alpine AS build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
ENV NODE_ENV=production

WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
ENV PATH=/opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .

# Placeholder values for build-time config loading (overridden at runtime)
ENV GOOGLE_CLOUD_SERVICE_ACCOUNT_JSON='{}'
ENV GOOGLE_CLOUD_BUCKET_NAME=placeholder

RUN npm run build

# Stage 2: Production
FROM node:22-alpine
RUN apk add --no-cache vips-dev
ENV NODE_ENV=production

WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
ENV PATH=/opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY --from=build /opt/app ./

EXPOSE 8082
CMD ["npm", "start"]
