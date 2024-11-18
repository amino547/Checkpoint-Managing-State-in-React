import React, { useState, useEffect } from 'react';
import TaskForm from './TaskFrom';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

 
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  
  const editTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  
  const deleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }
  };

 
  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
        onToggleCompletion={toggleTaskCompletion}
      />
    </div>
  );
}

export default App;

