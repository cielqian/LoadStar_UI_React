FROM nginx

COPY ./2218920_loadstar.top.key /etc/nginx/cert/2218920_loadstar.top.key
COPY ./2218920_loadstar.top.pem /etc/nginx/cert/2218920_loadstar.top.pem
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./build /www/
EXPOSE 80
