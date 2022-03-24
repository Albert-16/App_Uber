# Proyecto Aplicación de Uber

Este proyecto se encarga del manejo de viajes para distintas lugares.

## Comenzando 🚀

Descargar la rama de main y entrar a la terminal en la ruta de la carpeta del proyecto y asegurarse de tener instalado node js y npm instalados en su ordenador, luego utilizar el comando cd App_Uber para acceder.

### Pre-requisitos 📋

Tener en ejecución la Api Uber.
Si no la tiene la puede obtener del repositorio: [Api_Uber](https://github.com/Albert-16/Api_Uber.git) 

Luego tenemos que copiar el archivo Configuracion.env y cambiar su nombre a .env 
luego configuramos las siguientes variables:

* IP= Dirección ip de la red donde esta funcionando la api, no usar localhost
* PORT= Puerto que esta utilizando la api, puerto por defecto (4005)
* API_KEY = [Api key generada en google cloud platform](https://cloud.google.com/?hl=es)

Se debe crear un proyecto en google cloud platform y habilitar las api's que se muestran a continuación.

Nota: Para usar la Aplicación de Uber se necesitan activar 3 Api's de Google Cloud Platform:

* Places API: Autocompletado de las direcciones.
* Directions API: Obtener las direcciones y para fijar un marcador en el mapa.
* Distance Matrix API: Obtener la distancia y el tiempo entre las 2 direcciones.

Nota: Para que las api's funcionen debe tener su cuenta vinculada a un método de facturación.

Luego de habilitar las api's:

* npm install - este comando actualizará los paquete que usa nuestra aplicación.
* expo start - para ejecutar la app

## Construido con 🛠️

* [React Native](https://reactnative.dev/) 
* [Expo](https://expo.dev/) 
* [NPM](https://www.npmjs.com/)
* [Stripe](https://stripe.com/es-us)


## Versionado 📌

Usamos [GitHub](https://github.com/) para el versionado. Para todas las versiones disponibles, 
mira los [Aplicacion-Uber](https://github.com/Albert-16/App_Uber.git).

## Autores ✒️

* **Carlos Ardón**  - [Albert-16](https://github.com/Albert-16)
* **Nayeli Ardón** - [naye-19](https://github.com/naye-19)
* **Angel Quintanilla**  - [AngelDQF](https://github.com/AngelDQF)
* **Luis Flores**  - [LuisFlores-C](https://github.com/Luis-FloresC)


También puedes mirar la lista de todos los [contribuyentes](https://github.com/Albert-16/App_Uber/graphs/contributors) 
quienes han participado en este proyecto. 

## Expresiones de Gratitud 🎁

* Gracias al Ingeniero Carlos Flores por compartir su conocimiento con nosotros 😎
* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.

---
