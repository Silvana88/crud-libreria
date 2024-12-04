# CRUD en DOCKER

Esta proyecto creado con JavaScript, diseñdo para ejecutarse con node.js y utilizando el framework Express en el backend.
Para el frontend utilizamos React + Vite.
Esta en formato Docker para facilitar el desarrollo y la implementación.

## Estructura del proyecto

El proyecto está organizado de la siguiente manera:

    El backend se encuentra en el  `./backend`  directorio.
    El frontend se encuentra en el `./frontend` directorio.
    El directorio raíz contiene el `docker-compose.yml`archivo para ejecutar ambos servicios juntos.

## Puertos

- **Backend**: El servidor API Node.js se encuentra en el puerto **puerto 4000**.
- **Frontend**: La aplicacion React+Vite se encuentra en el puerto **puerto 3000**.

## Requisitos

Antes de comenzar, asegúrese de tener instalado lo siguiente:

- **Docker**: [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Install Docker Compose](https://docs.docker.com/compose/install/)

- **Necesitará acceso a una instancia de MongoDB para almacenar los elementos pendientes.**

## MongoDB Atlas

- Para que la aplicación funcione, debes crear una base de datos. Puede usar **MongoDB Atlas**.

- Dentro de la raiz de los archivos backend y frontend del proyecto, cree el archivo `.env`.

    - Una vez creado el archivo `.env` colocamos dentro la coneccion a la base de datos.

    Ejemplo:

    ```env
    URL_Mongo = mongodb+srv://usuario:contraseña@cluster0.mmnjk.mongodb.net/nombre-de-la-base-de-datos?retryWrites=true&w=majority& appName=Cluster0

    PORT = numero de puerto
    ```

    - o reeemplace `URL_Mongo` con su cadena de conexion real.

**Una vez que haya configurado su base de datos y la cadena de conexión, la aplicación podrá conectarse a MongoDB Atlas y almacenar los elementos pendientes.**


## Docker Compose

En la raíz del proyecto, use docker-compose para compilar e iniciar los servicios de frontend y backend en contenedores.
Docker-Compose crear las imagenes y ejecutar los contenedores utilizando el siguiente comando:

```bash
docker-compose up -d
```

## Ejecucion sin Docker

**Backend**

- Instalamos las dependencias para el archivo backend posicionandonos dentro de el y ejecutando el siguiente comando:

```bash
npm install
```

- Inicia el servidor backend:

```bash
npm start
```

**Frontend**

- Instalamos las dependencias para el archivo frontend posicionandonos dentro de el y ejecutando el siguiente comando:

```bash
npm install
```

Inicia el servidor frontend:

```bash
npm run dev
```

La aplicacion estara disponible en http://localhost:3000.

## Instalacion del repositorio

```bash
git clone < URL-del-repositorio >
cd < nombre-del-repositorio >
```
