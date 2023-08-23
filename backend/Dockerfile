# Use Node.js base image
FROM --platform=linux/amd64 node:16

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Generate Prisma Client
RUN npx prisma generate --schema /usr/src/app/src/db/prisma/schema.prisma

RUN npm run build
# Expose the port the app runs on
EXPOSE 3000

# init.sh is a script that will run before the app starts
ENTRYPOINT ["/usr/src/app/init.sh"]