# 

## Postgres
 

docker-compose up -d postgres
docker-compose ps 
docker-compose exec postgres bash

psql -h localhost -d my_store -U kenny

ver shemas: \d+
exit db: \q
exit terminal: exit

docker ps
docker inspect IDIMAGE

Al iniciar postgres borrar tablas y realizar migracion
