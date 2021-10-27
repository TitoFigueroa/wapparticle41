FROM node:latest
ENV NODE_ENV=production
WORKDIR /app
COPY ["./src/package.json", "./src/package-lock.json*", "./"]
RUN npm install --production && chown -R node.node /app
COPY ./src/app/index.js ./
USER node
CMD [ "node","index.js" ]
EXPOSE 8080