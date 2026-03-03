import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const createEmptyTask = () => ({
  title: '',
  priority: 'High',
  date: '',
  completed: false,
  id: uuidv4(),
});

export function TaskForm({ addTask }) {
  const [task, setTask] = useState(createEmptyTask());

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (task.title.trim() && task.date) {
      addTask(task);
    }
    setTask(createEmptyTask());
  };

  const formChangeHandler = (e, name) => {
    setTask((prev) => ({ ...prev, [name]: e.target.value }));
  };

  return (
    <form className="task-form" onSubmit={formSubmitHandler}>
      <input
        value={task.title}
        onChange={(e) => formChangeHandler(e, 'title')}
        type="text"
        placeholder="Task title"
        required
      />
      <select
        value={task.priority}
        onChange={(e) => formChangeHandler(e, 'priority')}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        value={task.date}
        onChange={(e) => formChangeHandler(e, 'date')}
        type="datetime-local"
        required
      />
      <button type="submit">Add task</button>
    </form>
  );
}
