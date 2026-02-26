import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [openSection, setOpenSection] = useState({
    taskList: false,
    taskForm: false,
    completedTask: false,
  });

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const toggleOpenSectionHandler = (prop) => {
    setOpenSection((prev) => ({ ...prev, [prop]: !prev[prop] }));
  };

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task list with priority</h1>
        <button
          className={`close-button ${openSection.taskForm ? 'open' : ''}`}
          onClick={() => toggleOpenSectionHandler('taskForm')}
        >
          +
        </button>
        {openSection.taskForm && <TaskForm addTask={addTask} />}
      </div>

      <div className="task-container">
        <h2>Tasks</h2>
        <button
          className={`close-button ${openSection.taskList ? 'open' : ''}`}
          onClick={() => toggleOpenSectionHandler('taskList')}
        >
          +
        </button>
        <div className="sort-controls">
          <button className="sort-button">By date</button>
          <button className="sort-button">By priority</button>
        </div>
        {openSection.taskList && <TaskList tasks={tasks} />}
      </div>

      <div className="completed-task-container">
        <h2>Completed task</h2>
        <button
          className={`close-button ${openSection.completedTask ? 'open' : ''}`}
          onClick={() => toggleOpenSectionHandler('completedTask')}
        >
          +
        </button>
        {openSection.completedTask && <CompletedTaskList />}
      </div>

      <Footer />
    </div>
  );
}

function TaskForm({ addTask }) {
  const [task, setTask] = useState({ title: '', priority: 'High', date: '', completed: false, id: uuidv4() });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ title: '', priority: 'High', date: '', completed: false });
  };

  const formChangeHandler = (e, name) => {
    setTask((prev) => ({ ...prev, [name]: e.target.value }));
  };
 
  return (
    <form className="task-form" onSubmit={(e) => formSubmitHandler(e)}>
      <input
        value={task['title']}
        onChange={(e) => formChangeHandler(e, 'title')}
        type="text"
        placeholder="Task title"
        required
      />
      <select
        value={task['priority']}
        onChange={(e) => formChangeHandler(e, 'priority')}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        value={task['date']}
        onChange={(e) => formChangeHandler(e, 'date')}
        type="datetime-local"
        required
      />
      <button type="submit">Add task</button>
    </form>
  );
}

function TaskList({ tasks }) {
  
  return (
    <ul className="task-list">
      {tasks.map((item, i) => (
        <TaskItem key={uuidv4()} task={item} />
      ))}
    </ul>
  );
}

function CompletedTaskList() {
  return (
    <ul className="completed-task-list">
      <TaskItem />
    </ul>
  );
}

function TaskItem({task}) {
  const {title, priority, date} = task;
  return (
    <li className={`task-item ${priority.toLowerCase()}`}>
      <div className="task-info">
        <div>
          Title <strong>{title}</strong>
        </div>
        <div className="task-deadline">Due: {date}</div>
      </div>
      <div className="task-buttons">
        <button className="complete-button">Complete</button>
        <button className="delete-button">Button</button>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Technologies and React concepts used: React, JSX, props, useState,
        component composition, conditional rendering, array methods (map,
        filter), event handling.
      </p>
    </footer>
  );
}

export default App;
