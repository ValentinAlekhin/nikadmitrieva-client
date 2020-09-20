# stage1 as builder
FROM node:12-alpine as builder

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /react-ui && mv ./node_modules ./react-ui

WORKDIR /react-ui

COPY . .

# Build the project and copy the files
RUN npm run build


FROM nginx

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /react-ui/build /usr/share/nginx/html

# Get ssl
RUN apt-get update \
 && apt-get install software-properties-common -y \
 && add-apt-repository universe \
 && add-apt-repository ppa:certbot/certbot \
 && apt-get update \
 && apt-get install certbot python3-certbot-nginx -y \
 && certbot --nginx -d nikadmitrieva.ru

EXPOSE 3000 80 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]