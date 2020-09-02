# Pull base image
FROM node:13.12.0-alpine AS dev

# Set Working Directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@2.1.1 -g --silent

# Add app
COPY . ./

# Startg app
CMD ["npm", "start"]