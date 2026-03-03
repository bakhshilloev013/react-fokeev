export function TaskItem({ task, toggleCompleteTask, deleteTask }) {
  if (!task) return null;

  const { title, priority, date } = task;

  return (
    <li className={`task-item ${priority.toLowerCase()}`}>
      <div className="task-info">
        <div>
          Title <strong>{title}</strong>
        </div>
        <div className="task-deadline">Due: {date}</div>
      </div>
      <div className="task-buttons">
        {!task.completed && (
          <button
            onClick={(e) => toggleCompleteTask(task.id)}
            className="complete-button"
          >
            Complete
          </button>
        )}
        <button onClick={(e) => deleteTask(task.id)} className="delete-button">
          Delete
        </button>
      </div>
    </li>
  );
}
