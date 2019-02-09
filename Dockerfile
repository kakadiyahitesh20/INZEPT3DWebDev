FROM node:8

# Create app directory
WORKDIR /Inzept3WebDevBack

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /Inzept3WebDevBack

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . /Inzept3WebDevBack

EXPOSE 8098
CMD [ "npm", "start" ]