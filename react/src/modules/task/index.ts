// Exportar componentes principales
export { default as TaskManager } from './components/TaskManager';
export { default as TaskForm } from './components/TaskForm';
export { default as TaskList } from './components/TaskList';
export { default as TaskItem } from './components/TaskItem';

// Exportar hooks
export { useTasks } from './hooks/useTasks';

// Exportar tipos
export type { Task, TaskFormData } from './types/Task';

// Exportar helpers
export { TaskStorageHelper, TaskIdHelper, DateHelper } from './helpers/taskHelpers';
