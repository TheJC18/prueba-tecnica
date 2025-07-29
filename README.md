# 🚀 Prueba Técnica - Gestor de Tareas

Bienvenido a mi solución para la prueba técnica. Este repositorio contiene **tres implementaciones diferentes** del mismo gestor de tareas, cada una demostrando diferentes enfoques y tecnologías.

## 🎯 Implementaciones Disponibles

### 1. 🔧 Backend (PHP)

**Ubicación:** `./backend/`

- **Tecnología:** PHP Vanilla
- **Base de datos:** Archivo JSON
- **API:** Endpoints RESTful
- **Características:** CRUD completo, validaciones servidor

### 2. 🌐 Frontend (Vanilla)

**Ubicación:** `./frontend/`

- **Tecnología:** HTML5 + CSS3 + JavaScript Vanilla
- **Almacenamiento:** localStorage
- **UI:** Bootstrap 5 + Font Awesome
- **Características:** SPA simple, responsive design

### 3. ⚛️ React (Moderno)

**Ubicación:** `./react/`

- **Tecnología:** React 19 + TypeScript
- **Arquitectura:** Modular con hooks personalizados
- **UI:** Bootstrap 5 + Font Awesome + Helpers de colores
- **Características:** Componentes reutilizables, tipado fuerte

## 🚀 Instrucciones de Instalación y Despliegue

### 🏃‍♂️ Quick Start - Despliegue Completo

Para levantar la aplicación completa (Frontend + Backend) en local:

#### Requisitos Previos

- **PHP 7.4** o superior
- **Navegador web** moderno
- **Terminal/CMD** con acceso a PHP

#### Pasos de Despliegue

1. **Inicia el Backend (API PHP)**

   ```bash
   cd backend
   php -S localhost:8000
   ```

   ✅ Backend corriendo en: `http://localhost:8000`
2. **Inicia el Frontend (en otra terminal)**

   ```bash
   # Desde la raíz del proyecto
   php -S localhost:3000
   ```

   ✅ Frontend corriendo en: `http://localhost:3000`
3. **Accede a la aplicación**

   - **🌐 Frontend Principal**: http://localhost:3000/frontend/
   - **🔌 API Backend**: http://localhost:8000/manager.php
   - **⚛️ React Version**: http://localhost:3000/react/

### 📋 Implementaciones Individuales

1. **Backend PHP:**

   ```bash
   cd backend/
   # Ver README.md para instrucciones completas
   ```
2. **Frontend Vanilla:**

   ```bash
   cd frontend/
   # Se conecta automáticamente al backend en puerto 8000
   ```
3. **React App:**

   ```bash
   cd react/
   npm install
   npm start
   ```

### 🧪 Verificación del Despliegue

Prueba que todo funciona correctamente:

```bash
# Prueba la API
curl -X GET "http://localhost:8000/manager.php"

# Debería devolver algo como:
# {"success":true,"message":"Tareas obtenidas correctamente","data":[],"count":0}
```

## 🎨 Características Técnicas Destacadas

### ✨ Diseño y UX

- 🎨 **Paleta de colores centralizada** (marrones/beige/blancos)
- 🌟 **Glass morphism effects** y gradientes modernos
- 📱 **Completamente responsivo** en todos los dispositivos
- ⚡ **Animaciones suaves** y transiciones

### 🔧 Arquitectura

- 📦 **Arquitectura modular** (especialmente en React)
- 🎯 **Separación de responsabilidades**
- 🔄 **Reutilización de código** con helpers y utilities
- 🛡️ **Validaciones robustas** en frontend y backend

### 💻 Tecnologías

- **Frontend:** React 19, TypeScript, Bootstrap 5, Font Awesome
- **Backend:** PHP, JSON File Storage
- **Tools:** npm, Create React App
- **Design:** CSS3, Flexbox, Grid, Custom Properties

## 🌐 URLs de Acceso

Una vez desplegado el proyecto completo:

| Servicio                     | URL                               | Puerto | Descripción                     |
| ---------------------------- | --------------------------------- | ------ | -------------------------------- |
| **Frontend Principal** | http://localhost:3000/frontend/   | 3000   | Aplicación web principal        |
| **API Backend**        | http://localhost:8000/manager.php | 8000   | API REST para gestión de tareas |
| **React Version**      | http://localhost:3000/react/      | 3000   | Aplicacion en REACT              |

### Frontend no conecta con Backend

- ✅ Verifica que ambos servidores estén corriendo
- ✅ Asegúrate de que el backend esté en puerto 8000
- ✅ Revisa la consola del navegador para errores CORS
- ✅ Confirma que la URL de la API en `frontend/app.js` sea correcta

### 📋 Checklist de Despliegue

- [ ] PHP instalado y funcionando (`php --version`)
- [ ] Backend corriendo en puerto 8000
- [ ] Frontend corriendo en puerto 3000
- [ ] Ambos servicios accesibles desde el navegador
- [ ] API responde correctamente: `curl http://localhost:8000/manager.php`
- [ ] Frontend puede crear, listar y eliminar tareas

## 🎯 Objetivos Demostrados

Esta prueba técnica demuestra:

1. **Versatilidad tecnológica** - Dominio de múltiples stacks
2. **Arquitectura limpia** - Código organizado y mantenible
3. **UX/UI moderno** - Diseño atractivo y funcional
4. **Buenas prácticas** - Convenciones y estándares de la industria
5. **Documentación completa** - READMEs detallados y comentarios

## 👨‍💻 Sobre el Desarrollo

**Enfoque:** Calidad sobre cantidad
**Filosofía:** Código limpio y mantenible

## 📞 Contacto

Si tienes alguna pregunta sobre las implementaciones o decisiones técnicas, no dudes en contactarme:

👨‍💻 **Jolber Chirinos**

📱 **Teléfono:** [622130388](tel:+34622130388)
📧 **Email:** [jolberchirinos@gmail.com](mailto:jolberchirinos@gmail.com)
💼 **LinkedIn:** [linkedin.com/in/jolber-chirinos](https://www.linkedin.com/in/jolber-chirinos18?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
🐙 **GitHub:** [github.com/thejc18
](https://github.com//TheJC18)

---

**¡Gracias por revisar mi pryecto!** 🙏

Espero que las diferentes implementaciones demuestren mi capacidad para adaptarme a diferentes tecnologías y enfoques según las necesidades del proyecto.
