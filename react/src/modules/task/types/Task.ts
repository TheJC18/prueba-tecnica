// types/Task.ts
export interface Task {
  id: number;
  title: string;
  description?: string;
  createdAt: string;
}

export interface TaskFormData {
  title: string;
  description: string;
}
