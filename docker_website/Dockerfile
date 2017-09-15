# cf. https://github.com/KyleAMathews/docker-nginx

# Pull nginx base image
FROM kyma/docker-nginx
MAINTAINER asideas

EXPOSE 80

# Update
RUN apt-get update
RUN apt-get -yqq install curl nano

# Stupid cache... NO CACHE FROM HERE ON
ARG CACHE_DATE=not_a_date
RUN touch /var/www/version.json
RUN echo { \"date\": \"$(date +%Y-%m-%d:%H:%M:%S)\", \"version\": \"$GO_PIPELINE_COUNTER\" } >> /var/www/version.json

COPY ./build /var/www

# Start up nginx server
CMD ["nginx"]



