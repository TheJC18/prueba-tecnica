# Instrucciones para ejecutar la prueba

## Requisitos Previos

- **PHP 7.4** o superior
- **Servidor web** (Apache, Nginx) o PHP built-in server
- **Navegador web** moderno
- Recominedo utilizar Laragon para obtener mucho mas facil todo lo antes mencionado.

## Configuración e Instalación (Con Laragon instalado y configurado)

### Usando Laragon

1. **Inicia Laragon**

   ```bash
   # El proyecto ya está en la carpeta de Laragon
   # Ruta: c:\laragon\www\Prueba Tecnica\backend\
   ```
2. **Accede a la aplicación**

   - URL: `localhost/Prueba%20Tecnica/backend/index.html`
   - O directamente: `localhost/Prueba%20Tecnica/backend/`

## Estructura de Archivos

```
backend/
├── manager.php    # API principal (GET, POST, DELETE)
├── tasks.json         # Almacén de datos JSON
├── index.html         # Interfaz de prueba
└── README.md          # Este archivo
```

## API Endpoints

### 1. Obtener todas las tareas

```http
GET /manager.php
```

**Respuesta de ejemplo:**

```json
{
  "success": true,
  "message": "Tareas obtenidas correctamente",
  "data": [
    {
      "id": 1,
      "title": "Completar prueba técnica",
      "description": "Implementar gestión de tareas en PHP",
      "created_at": "2025-01-21 10:30:00"
    }
  ],
  "count": 1
}
```

### 2. Agregar nueva tarea

```http
POST /manager.php
Content-Type: application/json

{
  "title": "Nueva tarea",
  "description": "Descripción opcional"
}
```

**Respuesta de ejemplo:**

```json
{
  "success": true,
  "message": "Tarea agregada correctamente",
  "data": {
    "id": 2,
    "title": "Nueva tarea",
    "description": "Descripción opcional",
    "created_at": "2025-01-21 10:35:00"
  }
}
```

### 3. Eliminar tarea

```http
DELETE /manager.php
Content-Type: application/json

{
  "id": 1
}
```

**Respuesta de ejemplo:**

```json
{
  "success": true,
  "message": "Tarea eliminada correctamente",
  "data": {
    "id": 1
  }
}
```

## Pruebas con cURL

Primero levantamos el servidor en la ruta que lo hayan creado. (En mi caso)

`cd "c:\laragon\www\Prueba Tecnica\backend" && php -S localhost:8000`

### Obtener tareas

```bash
 curl -X GET "http://localhost:8000/manager.php"
```

### Agregar tarea

```bash
 curl -X POST "http://localhost:8000/manager.php" -H "Content-Type: application/json" -d "{\"title\":\"Mi primera tarea\",\"description\":\"Descripcion de prueba\"}"
```

### Eliminar tarea

```bash
 curl -X DELETE "http://localhost:8000/manager.php" -H "Content-Type: application/json" -d "{\"id\":1}"
```

### Posibles Errores:

Error: "Permission denied" al escribir JSON

```bash
# En Linux/Mac
chmod 666 tasks.json

# En Windows (usando PowerShell como administrador)
icacls tasks.json /grant Everyone:F
```
