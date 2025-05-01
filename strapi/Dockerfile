FROM node:22-alpine-slim 

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build

EXPOSE 8082

CMD ["npm", "run", "start"]