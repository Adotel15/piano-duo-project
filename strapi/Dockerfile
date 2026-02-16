# Stage 1: Construcción
FROM node:18-alpine AS build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
ENV NODE_ENV=production

WORKDIR /opt/
COPY package.json package-lock.json ./
RUN npm install --only=production
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .
RUN npm run build

# Stage 2: Ejecución
FROM node:18-alpine
RUN apk add --no-cache vips-dev
ENV NODE_ENV=production

WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY --from=build /opt/app ./

EXPOSE 1337
CMD ["npm", "start"]