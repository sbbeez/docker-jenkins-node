FROM node:alpine
# setting work dir in image
WORKDIR "/node-app"
# copying package.json
COPY ./package*.json ./
# installing all dependencies
RUN npm ci
# copying all the files for app
COPY . .
# building (prod) all the files
RUN npm run build:prod
# staring prod version of the application
CMD ["npm", "run", "start:prod"]