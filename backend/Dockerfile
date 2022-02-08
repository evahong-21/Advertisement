FROM python:3.8.5

RUN apt-get update -y
RUN apt-get install -y graphviz libpq-dev xdg-utils

ENV TZ=Asia/Seoul

WORKDIR /src

COPY . /src

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

