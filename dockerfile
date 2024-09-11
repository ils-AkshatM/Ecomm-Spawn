# Use the official Node.js Alpine image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the rest of the application code to the container
COPY . .

# Install dependencies
RUN npm install

# Build the React application for production
RUN npm run build

# Install a simple HTTP server to serve the production build
RUN npm install -g serve

# Expose the port the application will run on
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]
