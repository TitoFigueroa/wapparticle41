FROM node:latest
ENV NODE_ENV=production
WORKDIR /app
COPY ["./src/package.json", "./src/package-lock.json*", "./"]
RUN npm install --production
COPY ./src/app/index.js ./
CMD [ "node","index.js" ]
EXPOSE 8080