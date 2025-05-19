#!/bin/sh

echo "Creating Database..."
node config/createDatabase.js

echo "Migrating Database..."
npx sequelize-cli db:migrate

echo "Starting Node Server..."
node index.js
