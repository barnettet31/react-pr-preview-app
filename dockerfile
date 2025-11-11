FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci 
COPY . . 
ARG VITE_PR_NUMBER
ENV VITE_PR_NUMBER=$VITE_PR_NUMBER
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
