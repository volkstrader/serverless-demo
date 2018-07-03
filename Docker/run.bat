SET REPO="D:\Users\h_heydrich\Repo\github.com"

docker run -it --rm ^
    -v "%REPO%\serverless-demo\firebase\app:/app/gcloud/web" ^
    -p 9005:9005 -p 3000:3000 ^
    --hostname serverless-demo ^
    --name serverless-demo ^
    serverless-demo:latest /bin/bash