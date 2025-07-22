<?php
/**
 * Clase TaskController
 * Maneja todas las operaciones CRUD para las tareas
 * Utiliza archivo JSON como almacenamiento de datos
 */

class TaskController {
    private $tasksData;
    
    /**
     * Constructor de la clase
     * @param string $tasksData Ruta del archivo JSON para almacenar las tareas
     */
    public function __construct($tasksData = 'tasks.json') {
        $this->tasksData = $tasksData;
        $this->initializeFile();
    }
    
    /**
     * Inicializa el archivo de tareas si no existe
     * @return void
     */
    private function initializeFile() {
        if (!file_exists($this->tasksData)) {
            file_put_contents($this->tasksData, json_encode([]));
        }
    }
    
    /**
     * Lee todas las tareas del archivo JSON
     * @return array Array de tareas
     */
    public function getTasks() {
        $json = file_get_contents($this->tasksData);
        return json_decode($json, true) ?: [];
    }
    
    /**
     * Guarda las tareas en el archivo JSON
     * @param array $tasks Array de tareas a guardar
     * @return int|false Número de bytes escritos o false en caso de error
     */
    private function saveTasks($tasks) {
        return file_put_contents($this->tasksData, json_encode($tasks, JSON_PRETTY_PRINT));
    }
    
    /**
     * Genera un nuevo ID autoincremental
     * @param array $tasks Array de tareas existentes
     * @return int Nuevo ID
     */
    private function getNextId($tasks) {
        if (empty($tasks)) {
            return 1;
        }
        $ids = array_column($tasks, 'id');
        return max($ids) + 1;
    }
    
    /**
     * Agrega una nueva tarea
     * @param string $title Título de la tarea
     * @param string $description Descripción de la tarea
     * @return array|false Array con los datos de la nueva tarea o false en caso de error
     */
    public function addTask($title, $description) {
        $tasks = $this->getTasks();
        
        $newTask = [
            'id' => $this->getNextId($tasks),
            'title' => trim($title),
            'description' => trim($description),
            'created_at' => date('Y-m-d H:i:s')
        ];
        
        $tasks[] = $newTask;
        
        if ($this->saveTasks($tasks)) {
            return $newTask;
        }
        
        return false;
    }
    
    /**
     * Elimina una tarea por ID
     * @param int $id ID de la tarea a eliminar
     * @return bool True si se eliminó correctamente, false en caso contrario
     */
    public function deleteTask($id) {
        $tasks = $this->getTasks();
        $originalCount = count($tasks);
        
        $tasks = array_filter($tasks, function($task) use ($id) {
            return $task['id'] != $id;
        });
        
        // Reindexar el array
        $tasks = array_values($tasks);
        
        if (count($tasks) < $originalCount) {
            $this->saveTasks($tasks);
            return true;
        }
        
        return false;
    }
    
    /**
     * Busca una tarea por ID
     * @param int $id ID de la tarea a buscar
     * @return array|null Array con los datos de la tarea o null si no se encuentra
     */
    public function getTaskById($id) {
        $tasks = $this->getTasks();
        foreach ($tasks as $task) {
            if ($task['id'] == $id) {
                return $task;
            }
        }
        return null;
    }
    
    /**
     * Actualiza una tarea existente
     * @param int $id ID de la tarea a actualizar
     * @param string $title Nuevo título
     * @param string $description Nueva descripción
     * @return array|false Array con los datos actualizados o false en caso de error
     */
    public function updateTask($id, $title, $description) {
        $tasks = $this->getTasks();
        
        foreach ($tasks as $key => $task) {
            if ($task['id'] == $id) {
                $tasks[$key]['title'] = trim($title);
                $tasks[$key]['description'] = trim($description);
                $tasks[$key]['updated_at'] = date('Y-m-d H:i:s');
                
                if ($this->saveTasks($tasks)) {
                    return $tasks[$key];
                }
                break;
            }
        }
        
        return false;
    }
    
    /**
     * Obtiene estadísticas de las tareas
     * @return array Array con estadísticas
     */
    public function getStats() {
        $tasks = $this->getTasks();
        
        return [
            'total' => count($tasks),
            'with_description' => count(array_filter($tasks, function($task) {
                return !empty(trim($task['description']));
            })),
            'without_description' => count(array_filter($tasks, function($task) {
                return empty(trim($task['description']));
            }))
        ];
    }
    
    /**
     * Limpia todas las tareas
     * @return bool True si se limpió correctamente
     */
    public function clearAllTasks() {
        return $this->saveTasks([]) !== false;
    }
}
?>
