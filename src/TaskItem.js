import React from 'react';

function TaskItem({ task, onDeleteTask, onEditTask, onToggleCompletion }) {
  const handleEdit = () => {
    onEditTask(task);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  const handleToggleCompletion = () => {
    onToggleCompletion(task.id);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={handleToggleCompletion}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;
