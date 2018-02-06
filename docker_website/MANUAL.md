# Build manually

````bash
npm run build
cp build docker_website
cd docker_website
docker build -t "asideas/as-ideas-website:1" -f Dockerfile .
docker run -d -p 8080:80  --name website asideas/as-ideas-website:1
docker stop website && docker rm website && docker rmi asideas/as-ideas-website:1
docker rmi $(docker images | grep ideas-website)
```

