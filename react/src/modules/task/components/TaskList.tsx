import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Task } from '../types/Task';
import TaskItem from './TaskItem';
import { colors } from '../helpers/ColorHelper';

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="card border-0 shadow-lg mb-4" style={{
        background: colors.gradients.card,
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        border: `1px solid ${colors.state.border}`
      }}>
        <div className="card-header border-0" style={{
          background: colors.gradients.primary,
          color: 'white',
          borderRadius: '20px 20px 0 0'
        }}>
          <h2 className="h4 mb-0 text-center py-2">
            <FontAwesomeIcon icon={['fas', 'list']} className="me-2" />
            Mis Tareas
          </h2>
        </div>
        <div className="card-body text-center py-5">
          <div className="mb-4" style={{ fontSize: '4rem', color: colors.primary.darkBrown }}>
            <FontAwesomeIcon icon={['fas', 'edit']} />
          </div>
          <h3 className="h4 mb-3" style={{ color: colors.text.accent }}>No hay tareas aún</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="card border-0 shadow-lg" style={{
      background: colors.gradients.card,
      borderRadius: '20px',
      overflow: 'hidden',
      border: `1px solid ${colors.state.border}`
    }}>
      {/* Encabezado de la lista */}
      <div className="card-header border-0" style={{
        background: colors.gradients.primary,
        color: 'white'
      }}>
        <div className="d-flex justify-content-between align-items-center py-2">
          <h2 className="h4 mb-0">
            <FontAwesomeIcon icon={['fas', 'list-check']} className="me-2" />
            Mis Tareas
          </h2>
          {tasks.length > 0 && (
            <span className="badge rounded-pill" style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontSize: '0.9rem',
              padding: '0.5rem 1rem'
            }}>
              {tasks.length} tarea{tasks.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
      </div>
      
      <div className="card-body p-0" style={{ borderRadius: '20px' }}>
        {tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            index={index}
            onDelete={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;