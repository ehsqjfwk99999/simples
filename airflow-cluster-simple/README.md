airflow-cluster-simple
======================

Simple Airflow cluster with LocalExecutor.

Powered by ...
--------------
- Docker Compose (`docker-compose.yaml`)

Before starting in Linux
------------------------
```bash
echo -e "AIRFLOW_UID=$(id -u)" > .env
```

Connect to webserver
--------------------
```
http://localhost:8080
```