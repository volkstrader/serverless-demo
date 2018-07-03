docker build -t serverless-demo:latest ^
  --build-arg FIREBASE_TOKEN=%FIREBASE_TOKEN% ^
  -f Dockerfile .\