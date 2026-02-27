import { TaskItem } from './TaskItem.jsx';

export function CompletedTaskList({ tasks }) {
  const completed = tasks.filter((t) => t.completed);

  return (
    <ul className="completed-task-list">
      {completed.length === 0 ? (
        <li className="task-item completed">No completed tasks yet</li>
      ) : (
        completed.map((item) => <TaskItem key={item.id} task={item} />)
      )}
    </ul>
  );
}

