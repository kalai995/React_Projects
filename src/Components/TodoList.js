
import React, { useState } from "react";
import "./todoList.css";

function TodoList() {
  const [tasks, setTasks] = useState(["cooking", "cleaning", "studying"]);
  const [newTask, setNewTask] = useState("");

  const onChangHandler = (e) => 
  {
    console.log(e.target.value);
    setNewTask(e.target.value);
  };

  const addTak = () => 
  {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  function deleteTask(i) 
  {
    const updatedTask = tasks.filter((_, index) => index !== i);
    setTasks(updatedTask);
  }

  function moveTaskUp(i) 
  {
    const updatedTasks = [...tasks];

    if (i > 0) {
      [updatedTasks[i], updatedTasks[i - 1]] = [
        updatedTasks[i - 1],
        updatedTasks[i],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(i)
   {
    const updatedTasks = [...tasks];
    if (i < tasks.length - 1) {
      [updatedTasks[i], updatedTasks[i + 1]] = [
        updatedTasks[i + 1],
        updatedTasks[i],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="todolist">
      <h1>TodoList</h1>
      <br />
      <input
        type="text"
        placeholder="Enter the task"
        value={newTask}
        onChange={onChangHandler}
      />
      <button type="submit" onClick={addTak}>
        Add Task
      </button>

      <ol className="list">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-task" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-task" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="move-task" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
