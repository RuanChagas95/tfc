FROM node:16.14-alpine

WORKDIR /app-backend
# Copy the rest of the source files into the image.
COPY package*.json .
RUN npm install
COPY . .

# Expose the port that the application listens on.
EXPOSE 3001

# Run the application.
ENTRYPOINT [ "npm", "run"]
CMD ["dev"]
