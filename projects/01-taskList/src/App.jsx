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

  const [sortType, setSortType] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const toggleCompleteTask = (id) => {
    const arr = tasks.map((item) => {
      if (item.id === id) {
        item.completed = true;
      }
      return item;
    });
    console.log(arr);
    setTasks(arr);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const toggleOpenSectionHandler = (prop) => {
    setOpenSection((prev) => ({ ...prev, [prop]: !prev[prop] }));
  };

  const toggleSortOrder = (type) => {
    if (sortType === type) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortOrder('asc');
      setSortType(type);
    }
  };

  const sortTask = (tasks) => {
    return [...tasks].sort((a, b) => {
      if (sortType === 'priority') {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return sortOrder === 'asc'
          ? priorityOrder[a.priority] - priorityOrder[b.priority]
          : priorityOrder[b.priority] - priorityOrder[a.priority];
      } else {
        return sortOrder === 'asc'
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }
    });
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
          <button
            className={`sort-button ${sortType === 'date' ? 'active' : ''}`}
            onClick={(e) => toggleSortOrder('date')}
          >
            By date {sortType === 'date' && (sortOrder === 'asc' ? '\u2191' : '\u2193')}
          </button>
          <button
            className={`sort-button ${sortType === 'priority' ? 'active' : ''}`}
            onClick={(e) => toggleSortOrder('priority')}
          >
            By priority {sortType === 'priority' && (sortOrder === 'asc' ? '\u2191' : '\u2193')}
          </button>
        </div>
        {openSection.taskList && (
          <TaskList
            deleteTask={deleteTask}
            toggleCompleteTask={toggleCompleteTask}
            tasks={sortTask(tasks)}
          />
        )}
      </div>

      <div className="completed-task-container">
        <h2>Completed task</h2>
        <button
          className={`close-button ${openSection.completedTask ? 'open' : ''}`}
          onClick={() => toggleOpenSectionHandler('completedTask')}
        >
          +
        </button>
        {openSection.completedTask && (
          <CompletedTaskList
            toggleCompleteTask={toggleCompleteTask}
            deleteTask={deleteTask}
            tasks={sortTask(tasks)}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
