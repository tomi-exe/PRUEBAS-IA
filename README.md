# TaskFlow

## Descripción
TaskFlow es una aplicación fullstack que permite gestionar tareas. Incluye un backend con Node.js y Express y un frontend con React y Vite.

## Estructura del Proyecto
- `backend/`: Contiene el código del servidor.
- `frontend/`: Contiene el código de la interfaz de usuario.
- `README.md`: Descripción del proyecto.

## Requisitos
- Node.js >= 14.0.0
- npm >= 6.0.0

## Instalación y Ejecución

### Backend
1. Navega al directorio `backend/`.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `node server.js` para iniciar el servidor.

El backend estará disponible en `http://localhost:3000`.

### Frontend
1. Navega al directorio `frontend/`.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm run dev` para iniciar el servidor de desarrollo.

El frontend estará disponible en `http://localhost:5173`.

## Endpoints del Backend
- GET /api/tasks: Obtiene todas las tareas.
- POST /api/tasks: Crea una nueva tarea.
- PUT /api/tasks/:id: Actualiza una tarea existente.
- DELETE /api/tasks/:id: Elimina una tarea.

## Notas
- La aplicación utiliza CORS para permitir solicitudes desde `http://localhost:5173`.
- Las tareas se gestionan en memoria, por lo que no persisten entre reinicios del servidor.
