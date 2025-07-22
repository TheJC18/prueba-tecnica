import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Task } from '../types/Task';
import { colors, ColorHelper } from '../helpers/ColorHelper';

interface TaskItemProps {
  task: Task;
  index: number;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  /**
   * Maneja la eliminación de la tarea
   */
  const handleDelete = (): void => {
    setIsDeleting(true);
    
    // Simular un pequeño delay para la animación
    setTimeout(() => {
      onDelete(task.id);
    }, 300);
  };

  return (
    <div className={`p-4 border-bottom position-relative ${isDeleting ? 'opacity-50' : ''}`} style={{
      transition: 'all 0.3s ease',
      background: ColorHelper.getAlternatingBackground(index),
      borderBottomColor: colors.state.border
    }}>
      <div className="d-flex justify-content-between align-items-start">
        <div className="flex-grow-1">
          <div className="d-flex align-items-center mb-3">
            <span className="badge me-3 px-3 py-2" style={{
              background: colors.gradients.button,
              borderRadius: '15px',
              fontSize: '0.85rem',
              color: 'white'
            }}>
              #{task.id}
            </span>
          </div>
          
          <h5 className="mb-3 fw-bold" style={{ color: colors.text.primary }}>{task.title}</h5>
          {task.description && (
            <p className="mb-3 lh-base" style={{ 
              fontSize: '0.95rem',
              maxWidth: '90%',
              color: colors.text.secondary
            }}>
              <FontAwesomeIcon icon={['fas', 'quote-left']} className="me-2" style={{ fontSize: '0.8rem', color: colors.primary.lightBrown }} />
              {task.description}
              <FontAwesomeIcon icon={['fas', 'quote-right']} className="me-2" style={{ fontSize: '0.8rem', color: colors.primary.lightBrown }} />
            </p>
          )}
          <small className="d-flex align-items-center" style={{ color: colors.text.accent }}>
            <FontAwesomeIcon icon={['fas', 'calendar-alt']} className="me-2" style={{ color: colors.primary.darkBrown }} />
            Creada: {task.createdAt}
          </small>
        </div>
        
        <button
          className={`btn btn-sm ms-4 ${isDeleting ? '' : ''}`}
          style={{
            borderRadius: '12px',
            padding: '8px 12px',
            transition: 'all 0.3s ease',
            borderWidth: '2px',
            border: `2px solid ${colors.primary.lightBrown}`,
            backgroundColor: 'transparent',
            color: colors.primary.darkBrown
          }}
          onClick={handleDelete}
          disabled={isDeleting}
          title="Eliminar tarea"
        >
          {isDeleting ? (
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          ) : (
            <FontAwesomeIcon icon={['fas', 'trash']} />
          )}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
