## ESPAÑOL:

Puedes acceder al sitio web desde el siguiente enlace desde tu PC o celular: [https://react-router-clone.netlify.app/](#)

# Clon de React Router con React

Este es un proyecto de **clon de React Router** hecho con **React**. La aplicación permite gestionar rutas dinámicas, páginas de carga perezosa/diferida (lazy loading), y navegación entre diferentes componentes. Está diseñado como una herramienta de aprendizaje y no como un reemplazo de React Router.

## Características

- **Rutas Dinámicas**: Permite crear rutas con parámetros dinámicos, como por ejemplo: `/search/:query`.
- **Lazy Loading**: Las páginas se cargan de manera perezosa/dinámica (lazy loading) para mejorar el rendimiento y evitar cargar archivos innecesarios al inicio.
- **Página de Error 404**: Si el usuario intenta acceder a una ruta que no existe, se muestra una página de error 404.
- **Interfaz de Carga**: Incluye un pequeño círculo de carga mientras se cargan las páginas.

## Páginas del Proyecto

- **Home**: Resumen del proyecto.
- **About**: Información sobre mi, con enlaces a GitHub y LinkedIn.
- **Search**: Página que permite realizar búsquedas con parámetros dinámicos. Si se proporciona un parámetro de muestra un mensaje con el mismo, de lo contrario se muestra un mensaje de sugerencia para agregar un parámetro en la URL.
- **Error 404**: Página de error que se muestra cuando el usuario intenta acceder a una URL no válida.

## Tecnologías usadas

- **React**: Framework para construir la interfaz de usuario.
- **path-to-regexp**: Librería utilizada para gestionar las rutas dinámicas.
- **React Lazy**: Para cargar los componentes de manera perezosa y mejorar el rendimiento.
- **Vitest**: Para realizar pruebas unitarias y asegurar el funcionamiento correcto de los componentes.

## Archivo `_redirects`

Para que la aplicación funcione correctamente cuando se despliegue en un servicio de hosting como Netlify, es necesario incluir un archivo llamado `_redirects` en la carpeta `public`. Este archivo asegura que las rutas de la aplicación, especialmente las rutas dinámicas, se redirijan correctamente a la página de inicio de tu aplicación para evitar errores 404.

## Instalación

Desde una terminal o cmd ingresa los siguientes comandos:

```bash
git clone https://github.com/Facundo-Chiappero/react-router-clone.git
cd react-router-clone
npm install
npm run dev
```


## ENGLISH:

You can access the website from the following link on your PC or mobile device: [https://react-router-clone.netlify.app/](#)

# React Router Clone with React

This is a **React Router clone** project made with **React**. The application allows you to manage dynamic routes, lazy loading pages, and navigation between different components. It is designed as a learning tool, not as a replacement for React Router.

## Features

- **Dynamic Routes**: Allows the creation of routes with dynamic parameters, such as `/search/:query`.
- **Lazy Loading**: Pages are lazily loaded to improve performance and avoid loading unnecessary files initially.
- **404 Error Page**: If the user tries to access a non-existent route, a 404 error page is shown.
- **Loading Interface**: Includes a small loading circle while pages are being loaded.

## Project Pages

- **Home**: Project summary.
- **About**: Information about me, with links to my GitHub and LinkedIn.
- **Search**: Page that allows searches with dynamic parameters. If a parameter is provided, it shows a message with the same. Otherwise, a suggestion message is shown to add a parameter to the URL.
- **Error 404**: Error page that appears when the user tries to access an invalid URL.

## Technologies Used

- **React**: Framework for building the user interface.
- **path-to-regexp**: Library used for managing dynamic routes.
- **React Lazy**: For lazily loading components to improve performance.
- **Vitest**: For unit testing and ensuring correct component functionality.

## `_redirects` File

To ensure the application works properly when deployed to a hosting service like Netlify, it is necessary to include a file called `_redirects` in the `public` folder. This file ensures that all routes, especially dynamic ones, are correctly redirected to the main page of the app to avoid 404 errors.

## Installation

From a terminal or command prompt, run the following commands:

```bash
git clone https://github.com/Facundo-Chiappero/react-router-clone.git
cd react-router-clone
npm install
npm run dev
```