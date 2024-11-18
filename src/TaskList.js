import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onEditTask, onDeleteTask, onToggleCompletion }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
          onToggleCompletion={onToggleCompletion}
        />
      ))}
    </ul>
  );
}

export default TaskList;
