FROM node:16.13.2 as frontend_builder

WORKDIR /src

COPY ./frontend ./
RUN rm -rf /src/node_modules
RUN npm install
RUN npm run build
RUN rm -rf /src/node_modules


FROM python:3.8.5

RUN apt-get update -y
RUN apt-get install -y graphviz libpq-dev xdg-utils python-mysqldb

ENV TZ=Asia/Seoul

WORKDIR /src

#COPY backend/requirements.txt ./
COPY ./backend /src

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY --from=frontend_builder /src/build /src/static