#!/bin/bash

if [ -d "./.vuepress/dist" ]; then 
	rm -rf ./.vuepress/dist 
fi

if [ -f "./Dockerfile" ]; then 
	rm -f ./Dockerfile
fi

#构建应用
npx vuepress build

#像 Dockerfile 中写入必要的内容
echo "FROM nginx:latest" >> ./Dockerfile
echo "COPY ./.vuepress/dist /usr/share/nginx/html/" >> ./Dockerfile

echo "EXPOSE 80" >> ./Dockerfile

#获取当前时间，作为镜像的 tag ，时间精确到秒
currentTime=$(date "+%Y%m%d%H%M%S")

docker build -t baichaohua/learn_docker:$currentTime .
echo "$docker_pwd" |  docker login --username baichaohua --password-stdin
docker push baichaohua/learn_docker:$currentTime

#移除名为 none 的 docker 镜像
docker images | grep none | awk '{print $3}' | xargs docker rmi