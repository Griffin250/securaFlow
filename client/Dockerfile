# client/Dockerfile
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps && npm run build

# Production image
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
