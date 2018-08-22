#!/bin/sh

echo "Copy resources..."
cp -r ../build .

echo "Write Version file"
echo "Going to Build Website with build number ${GO_PIPELINE_COUNTER}"
CURRENT_DATE=$(date +%Y-%m-%d:%H:%M:%S)

rm -f ./build/version.json
echo "{ \"version\": \"$GO_PIPELINE_COUNTER\", \"date\": \"$CURRENT_DATE\" }" >> ./build/version.json

docker build --build-arg CACHE_DATE=$(date +%Y-%m-%d:%H:%M:%S) -t "asideas/ideas-website-2:${GO_PIPELINE_COUNTER}" -f Dockerfile .

echo "Do Login to AWS ECR"
$(aws ecr get-login --no-include-email --region eu-central-1)

echo "Push docker containers."
docker push 340121395086.dkr.ecr.eu-central-1.amazonaws.com/ideas-website:$GO_PIPELINE_COUNTER

RES=$?

echo "Remove resources..."
rm -r ./build/

exit $RES
