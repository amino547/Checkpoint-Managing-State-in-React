import React, { useState, useEffect } from 'react';

function TaskForm({ onAddTask, onEditTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    if (onEditTask) {
      setTaskName(editingTask?.name || '');
      setTaskDescription(editingTask?.description || '');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName || !taskDescription) {
      alert('Please fill in both fields');
      return;
    }

    const newTask = {
      id: editingTask ? editingTask.id : Date.now(),
      name: taskName,
      description: taskDescription,
      completed: false,
    };

    if (editingTask) {
      onEditTask(newTask);
    } else {
      onAddTask(newTask);
    }

    setTaskName('');
    setTaskDescription('');
    setEditingTask(null);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        required
      />
      <button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;
