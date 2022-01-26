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