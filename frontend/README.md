# 🌐 Frontend - Gestión de Tareas (Vanilla JavaScript)

Una aplicación web moderna de gestión de tareas construida con **HTML5**, **CSS3**, **JavaScript Vanilla** y **Bootstrap 5**. Esta implementación demuestra el desarrollo frontend clásico sin frameworks, conectándose a una API REST en PHP.

## 🛠️ Tecnologías Utilizadas

### Core Frontend

- **HTML5** - Estructura semántica moderna
- **CSS3** - Estilos personalizados y variables
- **JavaScript ES6+** - Lógica de aplicación vanilla
- **Fetch API** - Comunicación asíncrona con backend

### UI Framework & Librerías

- **Bootstrap 5.3.2** - Framework CSS responsivo
- **Font Awesome 6.4.0** - Biblioteca de iconos
- **Bootstrap JS** - Componentes interactivos (alertas, etc.)

### Backend Integration

- **PHP REST API** - Conexión con `../backend/manager.php`
- **JSON** - Formato de intercambio de datos
- **CORS** - Comunicación cross-origin configurada

## 🚀 Instalación y Ejecución

### Prerrequisitos

- **PHP 7.4+** (para servidor web)
- **Navegador web moderno** (Chrome, Firefox, Safari, Edge)
- **Backend funcionando** en puerto 8000

### Instalación

1. **Asegurar que el backend esté ejecutándose:**

   ```bash
   # En una terminal separada
   cd ../backend/
   php -S localhost:8000
   ```
2. **Iniciar el servidor frontend:**

   ```bash
   # Desde la raíz del proyecto
   cd ../
   php -S localhost:3000
   ```
3. **Acceder a la aplicación:**

   ```
   URL: http://localhost:3000/frontend/
   ```

### Verificación del Despliegue

1. **Verificar conectividad backend:**

   ```bash
   curl -X GET "http://localhost:8000/manager.php"
   ```
2. **Abrir en navegador:**

   - Navegar a: `http://localhost:3000/frontend/`
   - Verificar que aparezca la interfaz de gestión de tareas
   - Probar agregar una tarea de prueba

## 📋 Guía de Uso

### Agregar Nueva Tarea

1. Completar el campo **Título** (obligatorio)
2. Opcionalmente agregar una **Descripción**
3. Hacer clic en **"Agregar Tarea"**
4. Verificar el mensaje de confirmación verde

### Ver Lista de Tareas

- Las tareas se cargan automáticamente al abrir la página
- Cada tarea muestra: ID, título, descripción y fecha de creación
- Usar **"Recargar Lista"** para actualizar manualmente

### Eliminar Tarea

1. Localizar la tarea en la lista
2. Hacer clic en el botón **"Eliminar"** (rojo)
3. Confirmar la acción en el diálogo
4. Verificar que la tarea desaparezca de la lista

## 🔧 Personalización

### Modificar Estilos

Editar `styles.css` para personalizar:

- Colores de marca
- Tipografía
- Espaciado
- Animaciones

### Cambiar Backend URL

En `app.js`, modificar:

```javascript
const API_URL = 'tu-nuevo-backend-url';
```

### Agregar Funcionalidades

Ejemplos de extensiones posibles:

- Edición de tareas existentes
- Filtros y búsqueda
- Categorías de tareas
- Ordenamiento personalizado

## 📊 Características Técnicas

### Performance

- ⚡ **Carga rápida** - Sin dependencias pesadas
- 🔄 **Actualizaciones eficientes** - Fetch API optimizado
- 📱 **Responsive** - Adaptable a cualquier pantalla

### Accesibilidad

- ♿ **Semántica HTML5** correcta
- 🔤 **Labels apropiados** en formularios
- ⌨️ **Navegación por teclado** funcional
- 🎨 **Contraste adecuado** en colores

### Compatibilidad

- 🌐 **Navegadores modernos** (ES6+)
- 📱 **Dispositivos móviles** y tablets
- 🖥️ **Resoluciones múltiples**
