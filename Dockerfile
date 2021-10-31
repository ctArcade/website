FROM node:16-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent && mv node_modules ../
COPY . .
RUN npm run build
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
