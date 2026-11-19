# Tutorial: Aplicación de Lista de Tareas con React

## Descripción

Este es un **tutorial práctico de React** para crear una **aplicación de lista de tareas** (To-Do App). Es un proyecto educativo diseñado para el módulo de **Desarrollo Web en Entorno Cliente** del ciclo formativo en el **IES Francisco de los Ríos** en Fernán Núñez, para el curso **2026/27**.

El proyecto proporciona una configuración mínima de React con TypeScript y Vite, incluyendo HMR (Hot Module Replacement) y reglas de linting con Oxlint.

## Configuración Inicial

Instala [Node.js](https://nodejs.org/) si aún no está instalado. Luego, desde la carpeta del proyecto, instala las dependencias:

```bash
npm install
```

## Desarrollo - Lanzar el Proyecto

Para iniciar el servidor de desarrollo con recarga en caliente (HMR):

```bash
npm run dev
```

Abre en el navegador la dirección que muestra la terminal (normalmente `http://localhost:5173`).

**Verificación**: Comprueba que se muestra la página y prueba el botón del contador. Para comprobar la recarga en caliente, modifica y guarda `src/App.tsx`.

En el estado inicial del proyecto se muestra la página de ejemplo de React y Vite. La aplicación de lista de tareas se desarrollará a lo largo del tutorial.

## Compilación - Crear Versión de Producción

Para crear una versión optimizada lista para producción:

```bash
npm run build
```

Esto genera los archivos compilados en la carpeta `dist/`. Puedes previsualizar la versión de producción con:

```bash
npm run preview
```

## Linting - Análisis de Código

Para verificar que el código cumple con los estándares de calidad:

```bash
npm run lint
```

Esto ejecuta Oxlint para detectar posibles problemas en el código.

## Formato - Formatear el Código

Para formatear automáticamente el código según las reglas de Prettier:

```bash
npm run format
```

Para verificar si el código está correctamente formateado sin hacer cambios:

```bash
npm run format:check
```

## Tests - Pruebas Unitarias

Para ejecutar los tests en modo watch (se ejecutan automáticamente cuando guardas cambios):

```bash
npm run test
```

Para ejecutar los tests una única vez:

```bash
npm run test:run
```

Los tests utilizan Vitest como framework de pruebas, combinado con Testing Library para las pruebas de componentes React.
