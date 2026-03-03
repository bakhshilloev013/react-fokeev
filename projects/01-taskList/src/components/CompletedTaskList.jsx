import { TaskItem } from './TaskItem.jsx';

export function CompletedTaskList({ tasks, deleteTask, toggleCompleteTask }) {
  const completed = tasks.filter((t) => t.completed);

  return (
    <ul className="completed-task-list">
      {completed.length === 0 ? (
        <li className="task-item completed">No completed tasks yet</li>
      ) : (
        completed.map((item) => (
          <TaskItem
            toggleCompleteTask={(e) => toggleCompleteTask(item.id)}
            key={item.id}
            deleteTask={deleteTask}
            task={item}
          />
        ))
      )}
    </ul>
  );
}
