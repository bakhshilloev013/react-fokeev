import { TaskItem } from './TaskItem.jsx';

export function TaskList({ tasks }) {
  return (
    <ul className="task-list">
      {tasks.map((item) => (
        <TaskItem key={item.id} task={item} />
      ))}
    </ul>
  );
}

