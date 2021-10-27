FROM node:latest
ENV NODE_ENV=production
RUN useradd -c 'Node.js user' -m -d /home/node -s /bin/bash node
RUN chown -R node.node /src
USER node
WORKDIR /app
COPY ["./src/package.json", "./src/package-lock.json*", "./"]
RUN npm install --production
COPY ./src/app/index.js ./
CMD [ "node","index.js" ]
EXPOSE 8080