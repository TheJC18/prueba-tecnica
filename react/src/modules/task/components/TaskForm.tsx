import React, { useState, FormEvent, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskFormData } from '../types/Task';
import { colors, ColorHelper } from '../helpers/ColorHelper';

interface TaskFormProps {
  onAddTask: (title: string, description?: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  // Estado del formulario
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  /**
   * Maneja los cambios en cualquier campo del formulario
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Resetea el formulario a su estado inicial
   */
  const resetForm = (): void => {
    setFormData({
      title: '',
      description: ''
    });
  };

  /**
   * Maneja el envío del formulario
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert('Por favor, ingresa un título para la tarea');
      return;
    }

    if (formData.title.length > 100) {
      alert('El título es demasiado largo (máximo 100 caracteres)');
      return;
    }

    if (formData.description.length > 500) {
      alert('La descripción es demasiado larga (máximo 500 caracteres)');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular un pequeño delay para mostrar el estado de carga
      await new Promise(resolve => setTimeout(resolve, 500));
      
      onAddTask(formData.title.trim(), formData.description.trim() || undefined);
      resetForm(); // Limpiar el formulario
    } catch (error) {
      console.error('Error al agregar tarea:', error);
      alert('Error al agregar la tarea. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Maneja las teclas presionadas en los inputs
   */
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && !isSubmitting) {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
        form.dispatchEvent(submitEvent);
      }
    }
  };

  // Verificar si el formulario tiene datos
  const hasData = formData.title.trim() || formData.description.trim();

  return (
    <div className="card mb-4 border-0 shadow-lg" style={{
      background: colors.gradients.card,
      borderRadius: '20px',
      overflow: 'hidden',
      border: `1px solid ${colors.state.border}`
    }}>
      <div className="card-header border-0" style={{
        background: colors.gradients.primary,
        color: 'white'
      }}>
        <h2 className="h4 mb-0 text-center py-2">
          <FontAwesomeIcon icon={['fas', 'plus']} className="me-2" />
          Agregar Nueva Tarea
        </h2>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
          {/* Campo de título */}
          <div className="mb-4">
            <label htmlFor="taskTitle" className="form-label fw-bold">
              <FontAwesomeIcon icon={['fas', 'heading']} className="me-2" style={{ color: colors.primary.darkBrown }} />
              Título de la tarea: <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              id="taskTitle"
              name="title"
              className="form-control form-control-lg"
              style={{
                borderRadius: '12px',
                border: `2px solid ${colors.state.borderLight}`,
                transition: 'all 0.3s ease',
                backgroundColor: colors.background.warmWhite
              }}
              value={formData.title}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Escribe el título de tu tarea aquí..."
              maxLength={100}
              disabled={isSubmitting}
              autoComplete="off"
            />
            <div className="form-text">
              <FontAwesomeIcon icon={['fas', 'info-circle']} className="me-1" style={{ color: colors.text.accent }} />
              {formData.title.length}/100 caracteres
            </div>
          </div>

          {/* Campo de descripción */}
          <div className="mb-4">
            <label htmlFor="taskDescription" className="form-label fw-bold">
              <FontAwesomeIcon icon={['fas', 'align-left']} className="me-2" style={{ color: colors.primary.darkBrown }} />
              Descripción (opcional):
            </label>
            <textarea
              id="taskDescription"
              name="description"
              className="form-control"
              style={{
                borderRadius: '12px',
                border: `2px solid ${colors.state.borderLight}`,
                transition: 'all 0.3s ease',
                minHeight: '100px',
                backgroundColor: colors.background.warmWhite
              }}
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Agrega una descripción detallada de tu tarea..."
              maxLength={500}
              rows={4}
              disabled={isSubmitting}
            />
            <div className="form-text">
              <FontAwesomeIcon icon={['fas', 'info-circle']} className="me-1" style={{ color: colors.text.accent }} />
              {formData.description.length}/500 caracteres
            </div>
          </div>
          
          <div className="d-flex gap-3 justify-content-center">
            <button
              type="submit"
              className="btn btn-lg px-4"
              style={{
                background: formData.title.trim() ? colors.gradients.button : colors.state.borderLight,
                border: 'none',
                borderRadius: '25px',
                color: formData.title.trim() ? 'white' : colors.primary.darkBrown,
                transition: 'all 0.3s ease',
                minWidth: '160px',
                fontWeight: '600'
              }}
              disabled={isSubmitting || !formData.title.trim()}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Agregando...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={['fas', 'plus']} className="me-2" />
                  Agregar Tarea
                </>
              )}
            </button>
            
            {hasData && (
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
                style={{
                  borderRadius: '25px',
                  transition: 'all 0.3s ease',
                  minWidth: '140px',
                  borderWidth: '2px',
                  borderColor: colors.primary.darkBrown,
                  color: colors.primary.darkBrown,
                  fontWeight: '600'
                }}
                onClick={resetForm}
                disabled={isSubmitting}
              >
                <FontAwesomeIcon icon={['fas', 'eraser']} className="me-2" />
                Limpiar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;