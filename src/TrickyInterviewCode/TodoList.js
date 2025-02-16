import React from "react";
import TaskList from "./TaskList";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState({
    title: "",
    description: "",
    priority: "medium",
    completed: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setTasks([...tasks, input]);
      setInput({
        title: "",
        description: "",
        priority: "medium",
        completed: false,
      });
    } catch (error) {}
  };

  const handleTaskCompleted = (index) => {
    const newTask = [...tasks];
    newTask[index].completed = !newTask[index].completed;
    setTasks(newTask);
  };

  const handleDeleteTask = (index) => {
    const delTask = [...tasks];
    delTask.splice(index, 1);
    setTasks(delTask);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title : </label>
          <input
            type="text"
            name="title"
            value={input.title}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label>Description : </label>
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label>Task : </label>
          <select
            name="priority"
            value={input.priority}
            style={{ width: "120px" }}
            onChange={handleInputChange}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>

      <h1>Tasks List</h1>
      <div>
        <TaskList
          tasks={tasks}
          handleTaskCompleted={handleTaskCompleted}
          handleDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default TodoList;
