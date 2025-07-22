import { Task } from '../types/Task';

/**
 * Constantes para localStorage
 */
const STORAGE_KEY = 'react-tasks';

/**
 * Helper para manejar las operaciones de localStorage relacionadas con tareas
 */
export class TaskStorageHelper {
  /**
   * Guarda las tareas en localStorage
   */
  static saveTasks(tasks: Task[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Error al guardar tareas en localStorage:', error);
    }
  }

  /**
   * Carga las tareas desde localStorage
   */
  static loadTasks(): Task[] {
    try {
      const savedTasks = localStorage.getItem(STORAGE_KEY);
      if (savedTasks) {
        return JSON.parse(savedTasks);
      }
      return [];
    } catch (error) {
      console.error('Error al cargar tareas del localStorage:', error);
      return [];
    }
  }

  /**
   * Limpia todas las tareas del localStorage
   */
  static clearTasks(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error al limpiar tareas del localStorage:', error);
    }
  }
}

/**
 * Helper para generar IDs únicos para las tareas
 */
export class TaskIdHelper {
  /**
   * Calcula el próximo ID basado en las tareas existentes
   */
  static getNextId(tasks: Task[]): number {
    if (tasks.length === 0) {
      return 1;
    }
    const maxId = Math.max(...tasks.map(task => task.id));
    return maxId + 1;
  }
}

/**
 * Helper para formatear fechas (Reutilizable en otros módulos)
 */
export class DateHelper {
  /**
   * Obtiene la fecha actual formateada
   */
  static getCurrentFormattedDate(): string {
    return new Date().toLocaleString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
