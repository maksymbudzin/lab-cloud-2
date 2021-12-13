FROM node:16-alpine AS build-step

WORKDIR /app

RUN apk --no-cache add git

RUN git clone https://github.com/maksymbudzin/lab-cloud-2.git
WORKDIR /app/lab-cloud-2

RUN npm install
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build-step /app/lab-cloud-2/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf