const TaskList = ({ tasks, handleTaskCompleted, handleDeleteTask }) => {
    return (
      <ul>
        {tasks.map((item, index) => (
          <li key={index} style={{ listStyleType: "none" }}>
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.title}
            </span>{" "}
            - {item.description} {item.priority}{" "}
            {/* <button onClick={(e) => handleTaskCompleted(index)}>Edit</button> */}
            <button onClick={(e) => handleTaskCompleted(index)}>
              {item.completed ? "Task Incomplete" : "Task Complete"}
            </button>{" "}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
  