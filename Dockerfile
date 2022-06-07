FROM node:alpine AS frontend-builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build
FROM nginx:alpine
COPY --from=frontend-builder /app/dist/angular-login-frontend /usr/share/nginx/html
EXPOSE 80