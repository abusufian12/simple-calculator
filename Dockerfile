FROM node:17

# Working dir
WORKDIR /usr/src/app

# Copy files from Build
COPY package*.json ./

# Copy SRC
COPY . .

# Install Files
RUN npm install --production
RUN npm run build

# Open Port
EXPOSE 1337

# Docker Command to Start Service
CMD [ "npm", "start" ]