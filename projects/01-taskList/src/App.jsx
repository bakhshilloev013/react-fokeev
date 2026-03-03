import { useState } from 'react';
import { TaskForm } from './components/TaskForm.jsx';
import { TaskList } from './components/TaskList.jsx';
import { CompletedTaskList } from './components/CompletedTaskList.jsx';
import { Footer } from './components/Footer.jsx';

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

  const toggleCompleteTask = (id) => {
    const arr = tasks.map(item => {
      if (item.id === id) {
        item.completed = true;
      }
      return item;
    })
    console.log(arr);
    setTasks(arr);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(item => item.id !== id));
  }

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
        {openSection.taskList && <TaskList deleteTask={deleteTask} toggleCompleteTask={toggleCompleteTask} tasks={tasks} />}
      </div>

      <div className="completed-task-container">
        <h2>Completed task</h2>
        <button
          className={`close-button ${openSection.completedTask ? 'open' : ''}`}
          onClick={() => toggleOpenSectionHandler('completedTask')}
        >
          +
        </button>
        {openSection.completedTask && <CompletedTaskList toggleCompleteTask={toggleCompleteTask} deleteTask={deleteTask} tasks={tasks} />}
      </div>

      <Footer />
    </div>
  );
}

export default App;
