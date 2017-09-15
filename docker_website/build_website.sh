#!/bin/sh

DOCKER_USER=$1
DOCKER_PWD=$2

echo "Copy resources..."
cp -r ../build .

echo "Write Version file"
echo "Going to Build Website with build number ${GO_PIPELINE_COUNTER}"
CURRENT_DATE=$(date +%Y-%m-%d:%H:%M:%S)

rm -f ./build/version.json
echo "{ \"version\": \"$GO_PIPELINE_COUNTER\", \"date\": \"$CURRENT_DATE\" }" >> ./build/version.json

echo "Build docker-containers"
docker login -u ${DOCKER_USER} -p ${DOCKER_PWD}

docker build --build-arg CACHE_DATE=$(date +%Y-%m-%d:%H:%M:%S) -t "asideas/ideas-website-2:${GO_PIPELINE_COUNTER}" -f Dockerfile .

echo "Push docker containers."
docker push asideas/ideas-website-2:$GO_PIPELINE_COUNTER

RES=$?

echo "Remove resources..."
rm -r ./build/

exit $RES
