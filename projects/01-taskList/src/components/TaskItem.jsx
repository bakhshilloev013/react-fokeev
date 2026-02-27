export function TaskItem({ task }) {
  if (!task) return null;

  const { title, priority, date } = task;

  return (
    <li className={`task-item ${priority?.toLowerCase?.() ?? ''}`}>
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

