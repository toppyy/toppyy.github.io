# Postgres + docker

`docker-compose.yml`:n sisältö:

    version: '3.1'

    services:

    db:
        image: postgres
        restart: always
        environment:
        POSTGRES_PASSWORD: example
        ports:
        - 8000:5432


Käynnistä:

    docker compose up

Komentorivillä pääsee käsiksi tietokantaa näin (voi suorittaa SQL:ää):

    docker container exec -it postgres_docker-db-1 psql -U postgres


Deno-appissa saa yhteyden tietokantaan näin:

    import postgres from "https://deno.land/x/postgresjs@v3.3.3/mod.js";

    const sql = postgres({
        host: "localhost",
        database: "postgres",
        username: "postgres",
        password: "example",
        port: 8000,
    });
