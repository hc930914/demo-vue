FROM nginx:1.17.4-alpine
ADD /dist/ /html
RUN rm -rf /etc/nginx/conf.d/*
COPY default.conf /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]
