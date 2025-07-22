import { useState, useEffect } from 'react';
import { Task } from '../types/Task';
import { TaskStorageHelper, TaskIdHelper, DateHelper } from '../helpers/taskHelpers';

interface UseTasksReturn {
  tasks: Task[];
  addTask: (title: string, description?: string) => void;
  deleteTask: (id: number) => void;
  clearAllTasks: () => void;
  isLoading: boolean;
}

/**
 * Hook personalizado para manejar el estado y operaciones de las tareas
 */
export const useTasks = (): UseTasksReturn => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Cargar tareas del localStorage al montar el componente
  useEffect(() => {
    setIsLoading(true);
    const savedTasks = TaskStorageHelper.loadTasks();
    setTasks(savedTasks);
    setIsLoading(false);
  }, []);

  // Guardar tareas en localStorage cuando cambie el estado
  useEffect(() => {
    if (!isLoading) {
      TaskStorageHelper.saveTasks(tasks);
    }
  }, [tasks, isLoading]);

  /**
   * Agrega una nueva tarea a la lista
   */
  const addTask = (title: string, description?: string): void => {
    if (!title.trim()) {
      alert('El título de la tarea no puede estar vacío');
      return;
    }

    const newTask: Task = {
      id: TaskIdHelper.getNextId(tasks),
      title: title.trim(),
      description: description?.trim(),
      createdAt: DateHelper.getCurrentFormattedDate()
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  /**
   * Elimina una tarea de la lista
   */
  const deleteTask = (id: number): void => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    }
  };

  /**
   * Limpia todas las tareas
   */
  const clearAllTasks = (): void => {
    if (tasks.length === 0) {
      alert('No hay tareas para eliminar');
      return;
    }

    if (window.confirm(`¿Estás seguro de que quieres eliminar todas las ${tasks.length} tareas?`)) {
      setTasks([]);
      TaskStorageHelper.clearTasks();
    }
  };

  return {
    tasks,
    addTask,
    deleteTask,
    clearAllTasks,
    isLoading
  };
};
