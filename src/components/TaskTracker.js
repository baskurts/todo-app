import React from "react";
import "./TaskTracker.css"; // CSS ekleyelim

const TaskTracker = ({ tasks = [] }) => {
  // 🆕 Mevcut görevler arasından tamamlananları say
  const lastTask = tasks.length > 0 ? tasks[tasks.length - 1] : null;
  const completedTasks = tasks?.filter(task => task.completed).length || 0;
  const totalTasks = tasks?.length || 0;
  

  return (
    <div className="task-tracker">
      <h2>Task Tracker</h2>
      <p>Way to go!</p>
      {lastTask && lastTask.task && (
  <p className="task-message">
    ToDo "{lastTask.task}" successfully added. Got id {lastTask.id}
  </p>
)}
      <div className="progress-circle">
        <span>{completedTasks}/{totalTasks}</span>
      </div>
    </div>
  );
};

export default TaskTracker;

