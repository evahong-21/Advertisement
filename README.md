# Advertisement
Simple Advertisements Application

## Database
- mariaDB
    table(id, title, description, price, dateCreated)

## Running Application

1. Create .env file with following content
```
PORT=8888
DB_DATABASE=advertisements
DB_USERNAME=advertisement
DB_PASSWORD=1111
```

2. Run docker compose

```
docker compose up -d --build
```

3. Check if containers are up and running

```
docker compose ps
```


 Simple Advertisements Application

### 1/25
Database & Backend
1. Maria db connection (app.py)
    1. table(id, title, description, price, dateCreated)
2. Backend(python-app.py) + check API(Postman)
    1. get/add/update/delete 

### 1/26
Frontend(ReactJS)

    1. App.js
        1. Insert button
    2. ArticleList.js
        1. Show table’s list
        2. Update/delete button
    3. Form.js
        1. Show update/Insert form
        2. Update 일때 기존 값 나옴 / insert 일때 placeholder
    4. APIService.js
        1. update/delete/insert fetch > app.py


### 1/27

Frontend(ReactJS)
1. Route (index, root, app)
2. Table (first page)
3. Detail, update, delete

### 1/28

Frontend(ReactJS)
1. Sorting(price, creation date) - frontend

### 2/3

Frontend(ReactJS)
1. Pagination(10)
2. Sure about Delete(alert)

### 2/4

Frontend(ReactJS)
1. Date format
2. insert&update (Validation) - frontend
3. Sorting(price, creation date) - backend
    1. Default : date desc

### 2/7


1. Update (Validation) - backend


### 2/8


1. Insert (Validation) - backend
2. Dockerization


### 2/9


1. Data : sqldump > advertisements/origin.sql
2. Learning Docker
3. Separately run React/app


### 2/11


1. Url > /advertisement
2. Method (GET, POST, PUT, DELETE) 다르면 /에 다르게 명시하지 않아도 됨.
3. Absolute path > process.env.REACT_APP_API_URL || /api
4. ?A={a}&B={b} response format


### 3/2


1. customize highlight using Mark.js
2. switch function



