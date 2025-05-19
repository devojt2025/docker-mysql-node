# Example Node.js backend Dockerfile
FROM node:22

WORKDIR .

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
