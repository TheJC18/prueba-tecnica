import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTasks } from '../hooks/useTasks';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { colors, ColorHelper } from '../helpers/ColorHelper';

const TaskManager: React.FC = () => {
  const { tasks, addTask, deleteTask, clearAllTasks, isLoading } = useTasks();

  if (isLoading) {
    return (
      <div className="container py-4">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-muted fs-5">Cargando tareas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 w-100 d-flex flex-column" style={{ 
      background: colors.gradients.background,
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      width: '100vw',
      position: 'relative'
    }}>
      <div className="container py-5 flex-grow-1">
        {/* Card superior contenedor */}
        <div className="card border-0 shadow-lg" style={{
          background: colors.gradients.card,
          borderRadius: '25px',
          padding: '2rem',
          boxShadow: `0 20px 40px ${ColorHelper.hexToRgba(colors.primary.darkBrown, 0.1)}, 0 10px 20px ${ColorHelper.hexToRgba(colors.primary.darkBrown, 0.05)}`
        }}>
          <header className="text-center mb-3">
            <div className="mb-3 d-flex justify-content-center">
              <div
              style={{
                background: colors.primary.lightBrown,
                borderRadius: '16px',
                padding: '12px 24px',
                boxShadow: `0 4px 15px ${ColorHelper.hexToRgba(colors.primary.darkBrown, 0.08)}`,
                display: 'inline-block'
              }}
              >
              <img
                src="/logow.webp"
                alt="Mi logo"
                className="img-fluid"
                style={{
                maxHeight: '64px',
                filter: `drop-shadow(0 2px 8px ${ColorHelper.hexToRgba(colors.primary.darkBrown, 0.10)})`
                }}
              />
              </div>
            </div>

            <h1 className="display-3 fw-bold mb-2" style={{ 
              color: colors.text.primary,
              textShadow: `0 2px 4px ${ColorHelper.hexToRgba(colors.primary.darkBrown, 0.1)}` 
            }}>
              Gestor de Tareas
            </h1>
          </header>

          <main>
            {/* Formulario para agregar tareas */}
            <TaskForm onAddTask={addTask} />

            {/* Lista de tareas */}
            <TaskList 
              tasks={tasks} 
              onDeleteTask={deleteTask}
            />

            {/* Acciones adicionales */}
            {tasks.length > 0 && (
              <div className="text-center mt-4">
                <button 
                  className="btn btn-lg shadow-lg"
                  onClick={clearAllTasks}
                  title="Eliminar todas las tareas"
                  style={{
                    background: colors.gradients.button,
                    border: 'none',
                    borderRadius: '25px',
                    padding: '12px 30px',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <FontAwesomeIcon icon={['fas', 'trash']} className="me-2" />
                  Limpiar Todo
                </button>
              </div>
            )}
          </main>

          <footer className="text-center mt-5">
            <div className="card border-0 shadow-sm" style={{
              background: colors.gradients.buttonSecondary,
              borderRadius: '15px',
              border: `1px solid ${colors.state.border}`
            }}>
              <div className="card-body py-3">
                <p className="mb-0" style={{ color: colors.text.muted }}>
                  <FontAwesomeIcon icon={['fas', 'lightbulb']} className="me-2" style={{ color: colors.primary.darkBrown }} />
                  Las tareas se guardan automáticamente en el navegador
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default TaskManager;