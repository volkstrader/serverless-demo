FROM serverless:latest

ARG FIREBASE_TOKEN
ENV FIREBASE_TOKEN=$FIREBASE_TOKEN

ADD ./github.com /root/.ssh/github.com
ADD ./config /root/.ssh/config
RUN chmod 400 /root/.ssh/github.com && chmod 600 /root/.ssh/config

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN npm install -g create-react-app && npm install -g firebase-tools

RUN mkdir -p /app/gcloud/web && mkdir -p /app/aws/lambda

USER node
RUN npm install -g firebase-admin -g --force

USER root
WORKDIR /app/gcloud/web