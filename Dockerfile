FROM nginx:alpine

# Copy all files into NGINX's deployment directory
COPY . /usr/share/nginx/html

# Hardcode the configuration file to look at port 8080 explicitly 
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf
RUN sed -i 's/listen  \[::\]:80;/listen  \[::\]:8080;/g' /etc/nginx/conf.d/default.conf

EXPOSE 8080
