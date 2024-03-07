FROM node:16.14-alpine
WORKDIR /app-frontend

COPY package*.json .
RUN ["npm", "install"]
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]