import { TaskItem } from './TaskItem.jsx';

export function TaskList({ tasks, toggleCompleteTask, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map(
        (item) =>
          !item.completed && (
            <TaskItem deleteTask={deleteTask} toggleCompleteTask={toggleCompleteTask} key={item.id} task={item} />
          ),
      )}
    </ul>
  );
}
