# PROYECTO FINAL

## Para el proyecto (BETA) utilizamos:
- [Python 3.10.0](https://www.python.org/downloads/release/python-3100/)
- [Postman](https://www.postman.com/) (Para realizar peticiones a las API `opcional`)
- [NodeJS](https://nodejs.org/es/) **LTS** (Si te instalaste la Actual desinstala esa version e instala la LTS **perdooon la actual da muchos fallos**)
- [Redis](https://github.com/microsoftarchive/redis/releases) **[VER EL VIDEO : INSTALACION](https://youtu.be/188Fy-oCw4w)**

## Documentacion
- [React](https://create-react-app.dev/)
- [Flask](https://flask.palletsprojects.com/en/2.0.x/)
- [Redis](https://github.com/redis/redis-py)

## Instrucciones
## Haz esto si ya instalaste todo
- En una consola utiliza el siguiente comando, para instalar los requerimentos para python/flask (Desde la carpeta donde se encuentra `requirements.txt`)
```
pip install -r requirements.txt
```

- Utilizar el siguiente comando cuando hayas hecho lo anterior

En el siguiente paso haremos lo siguiente:

![''](Screen3.png)

Tomaremos la carpeta `\src` (dentro de la carpeta `\frontend`) y el archivo `.env` (tambien de la carpeta `\frontend`) y los guardaremos en una carpeta aparte (esta carpeta sera temporal)

Luego de esto borramos la carpeta `\frontend`

En una consola nos dirigimos a la carpeta del repositorio (mediante comandos) (`\DAS_ProyectoFinal`) y ponemos el siguiente comando
```
npx create-react-app frontend
```
Si viste esto significa que no soy el unico haciendo algo en el repo :)

Aqui nos creara otra vez la carpeta frontend, pero desde cero (esto para tener react activo en nuestras maquinas)

Dentro de esa carpeta nos dejara una carpeta `\src`, la vamos a eliminar

Ahora es cuando los archivos que guardamos temporalmente los arrastramos a la carpeta `\frontend`

La carpeta temporal ya la puedes borrar, pero asegurate que sean los archivos

Iniciamos redis con `redis-server` (en caso de haber visto el video)
Ejecutamos el script `backend.py` (ubicado en `.\backend\src`)para iniciar el host

Ahora nos movemos a la carpeta \frontend mediante cmd (`cd .\frontend\`) 

y utilizamos 
```
npm i react-router-dom bootswatch
```
y luego:
```
npm start
```
Esto lo que hara es que nos abrira el servidor de nodeJS en localhost:3000 y nos debe aparecer la ventana principal del CRUD

!['Holi'](Screen4.png)

La pestaña `Patitos` tiene una vista asi:

!['Holi'](Screen5.png)

Y pues creo que es todo, puedes utilizar `Postman` para realizar las peticiones al servidor (GET, PUT, DELETE, POST) (todas las rutas estan en `backend.py`)

**NOTA: VERIFICAR LAS CONSOLAS DEL SCRIPT BACKEND Y NODE PARA VER ERRORES**