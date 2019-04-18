FROM ros:melodic
RUN apt-get update && apt-get install -y \
    ros-melodic-rosbridge-server -y \
    apache2 -y
EXPOSE 8000 9090 80
COPY  index.html /var/www/html/index.html
COPY  script.js /var/www/html/script.js
COPY  webui.js /var/www/html/webui.js
COPY entrypoint.sh /

#ENTRYPOINT ["sh", "/entrypoint.sh"]

# How to build it?
# docker build -t ex01 .

# How to run it?
# docker run --name ex01 --rm -it -p 8000:8000  ex01
# sudo docker exec -it ros_ex01 /bin/sh
