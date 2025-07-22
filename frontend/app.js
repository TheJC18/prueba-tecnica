/**
 * API Rest para la gestion de los datos en el Frontend
 * Maneja todas las interacciones con el backend PHP
 */

// URL de la API
const API_URL = 'http://localhost:8000/manager.php';

// Cargar tareas al inicio
document.addEventListener('DOMContentLoaded', loadTasks);

// Manejar envío del formulario
document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
});

/**
 * Muestra un mensaje al usuario
 */
function showMessage(message, type = 'success') {
    const messageDiv = document.getElementById('message');
    const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';
    messageDiv.innerHTML = `
        <div class="alert ${alertClass} alert-dismissible fade show" role="alert">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'} me-2"></i>
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    
    // Auto-hide después de 5 segundos
    setTimeout(() => {
        const alert = messageDiv.querySelector('.alert');
        if (alert) {
            alert.classList.remove('show');
            setTimeout(() => {
                messageDiv.innerHTML = '';
            }, 150);
        }
    }, 5000);
}

/**
 * Carga todas las tareas
 */
function loadTasks() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayTasks(data.data);
                showMessage(`${data.count} tareas cargadas correctamente`);
            } else {
                showMessage('Error al cargar las tareas: ' + data.message, 'error');
            }
        })
        .catch(error => {
            showMessage('Error de conexión: ' + error.message, 'error');
        });
}

/**
 * Agrega una nueva tarea
 */
function addTask() {
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    
    if (!title) {
        showMessage('El título es requerido', 'error');
        return;
    }
    
    const taskData = {
        title: title,
        description: description
    };
    
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showMessage('Tarea agregada correctamente');
            document.getElementById('taskForm').reset();
            loadTasks();
        } else {
            showMessage('Error al agregar la tarea: ' + data.message, 'error');
        }
    })
    .catch(error => {
        showMessage('Error de conexión: ' + error.message, 'error');
    });
}

/**
 * Elimina una tarea
 */
function deleteTask(id) {
    if (!confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
        return;
    }
    
    fetch(API_URL, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showMessage('Tarea eliminada correctamente');
            loadTasks();
        } else {
            showMessage('Error al eliminar la tarea: ' + data.message, 'error');
        }
    })
    .catch(error => {
        showMessage('Error de conexión: ' + error.message, 'error');
    });
}

/**
 * Muestra las tareas en el DOM
 */
function displayTasks(tasks) {
    const tasksContainer = document.getElementById('tasks');
    
    if (!tasks || tasks.length === 0) {
        tasksContainer.innerHTML = `
            <div class="text-center py-4">
                <div class="mb-3" style="font-size: 3rem; color: #6c757d;">
                    <i class="fas fa-edit"></i>
                </div>
                <h5 class="text-muted">No hay tareas registradas</h5>
            </div>
        `;
        return;
    }
    
    let html = '';
    tasks.forEach((task, index) => {
        html += `
            <div class="border-bottom py-3 ${index === 0 ? 'border-top' : ''}">
                <div class="d-flex justify-content-between align-items-start">
                    <div class="flex-grow-1">
                        <div class="d-flex align-items-center mb-2">
                            <span class="badge bg-secondary me-2">#${task.id}</span>
                        </div>
                        <h5 class="mb-2">${task.title}</h5>
                        <p class="text-muted mb-2">${task.description || 'Sin descripción'}</p>
                        <small class="text-muted">
                            <i class="fas fa-calendar-alt me-1"></i>
                            Creada: ${task.created_at || 'Fecha no disponible'}
                        </small>
                    </div>
                    <button class="btn btn-outline-danger btn-sm ms-3" onclick="deleteTask(${task.id})" title="Eliminar tarea">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    tasksContainer.innerHTML = html;
}