<?php
/**
 * Aqui creo un "API" para todos los endpoints de tareas
 * Endpoints: GET, POST, DELETE
 */

// Incluir el controlador de tareas 
require_once 'TaskController.php';

// Headers para volver mi php un API REST
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

// Inicializar el controlador
$taskController = new TaskController();

// Procesar la solicitud
$method = $_SERVER['REQUEST_METHOD'];
$response = ['success' => false, 'message' => '', 'data' => null];

try {
    switch ($method) {
        case 'GET':
            // Mostrar todas las tareas
            $tasks = $taskController->getTasks();
            $response = [
                'success' => true,
                'message' => 'Tareas obtenidas correctamente',
                'data' => $tasks,
                'count' => count($tasks)
            ];
            break;
            
        case 'POST':
            // Agregar nueva tarea
            $input = json_decode(file_get_contents('php://input'), true);
            
            if (!$input) {
                // Fallback para formularios HTML
                $input = $_POST;
            }
            
            $title = $input['title'] ?? '';
            $description = $input['description'] ?? '';
            
            if (empty($title)) {
                $response['message'] = 'El título es requerido';
                break;
            }
            
            $newTask = $taskController->addTask($title, $description);
            
            if ($newTask) {
                $response = [
                    'success' => true,
                    'message' => 'Tarea agregada correctamente',
                    'data' => $newTask
                ];
            } else {
                $response['message'] = 'Error al agregar la tarea';
            }
            break;
            
        case 'DELETE':
            // Eliminar tarea
            $input = json_decode(file_get_contents('php://input'), true);
            $id = $input['id'] ?? $_GET['id'] ?? null;
            
            if (!$id) {
                $response['message'] = 'ID de tarea requerido';
                break;
            }
            
            if ($taskController->deleteTask($id)) {
                $response = [
                    'success' => true,
                    'message' => 'Tarea eliminada correctamente',
                    'data' => ['id' => $id]
                ];
            } else {
                $response['message'] = 'Tarea no encontrada o error al eliminar';
            }
            break;
            
        default:
            $response['message'] = 'Método no permitido';
            http_response_code(405);
            break;
    }
    
} catch (Exception $e) {
    $response = [
        'success' => false,
        'message' => 'Error interno del servidor: ' . $e->getMessage(),
        'data' => null
    ];
    http_response_code(500);
}

// Enviar respuesta JSON
echo json_encode($response, JSON_PRETTY_PRINT);
?>
