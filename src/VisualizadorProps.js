import React, { useState } from 'react';
import './App.css'; // Archivo CSS para estilos

const VisualizadorProps = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: taskInput, completed: false },
      ]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="task-visualizer">
      <h2>Visualizador de Tareas</h2>
      <div className="task-input-container">
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Agregar</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span className="task-label">Tarea {index + 1}:</span>
            <span className="task-text" onClick={() => handleToggleComplete(task.id)}>
              {task.text}
            </span>
            <button className="delete-button" onClick={() => handleDeleteTask(task.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisualizadorProps;
