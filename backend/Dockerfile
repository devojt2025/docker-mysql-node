FROM node:22

# Install dos2unix
RUN apt-get update && apt-get install -y dos2unix

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy everything else (including entrypoint)
COPY . .

# Convert script line endings from CRLF to LF
RUN dos2unix docker-entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x docker-entrypoint.sh

EXPOSE 3000

# Set the entrypoint
ENTRYPOINT ["./docker-entrypoint.sh"]
