import "./styles/App.css";
import { React, useState } from "react";
import Task from "./components/task";
import { nanoid } from "nanoid";

const TASKS = [
  { name: "Eat", isCompleted: false, id: 1 },
  { name: "Sleep", isCompleted: false, id: 2 },
  { name: "Repeat", isCompleted: false, id: 3 },
];

function App() {
  const [taskListData, setTaskList] = useState(TASKS);
  let taskName;

  const taskList = taskListData.map((task) => {
    return (
      <Task
        name={task.name}
        key={task.id}
        id={task.id}
        onComplete={completeTask}
        isCompleted={task.isCompleted}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    );
  });

  //// *** PROP FUNCTIONS *** ////

  function completeTask(id) {
    const newTaskList = taskListData.map((task) => {
      if (task.id === id) task.isCompleted = !task.isCompleted;
      return task;
    });
    setTaskList(newTaskList);
  }

  function addTask(name) {
    const newTask = { name: name, isCompleted: false, id: nanoid() };
    const newTaskList = [...taskListData, newTask];
    setTaskList(newTaskList);
  }

  function deleteTask(id) {
    const newTaskList = taskListData.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  }

  function editTask(id, newName) {
    const newTaskList = taskListData.map((task) => {
      if (task.id === id) task.name = newName;
      return task;
    });
    setTaskList(newTaskList);
  }
  /// **** HTML ELEMENT **** ////
  return (
    <div className="App">
      <h1>Task TO-DO List</h1>
      <p>There are {taskListData.length} tasks left.</p>

      <div className="addContainer">
        <label htmlFor="all"> Add Task </label>
        <input
          type="text"
          id="all"
          onChange={(e) => (taskName = e.target.value)}
        />
        <button onClick={() => addTask(taskName)}>Add</button>
      </div>

      <div className="tasksContainer">
        <ul>{taskList}</ul>
      </div>
    </div>
  );
}

export default App;
