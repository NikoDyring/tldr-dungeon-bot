# Build stage
FROM node:14.11 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV NODE_ENV=production
RUN npm run build

# Production stage
FROM node:14.11 as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist /app/dist
COPY package*.json /app/
RUN npm ci
ENV NODE_ENV=production
CMD [ "npm", "start" ]

LABEL authors="png-gang.ts"
