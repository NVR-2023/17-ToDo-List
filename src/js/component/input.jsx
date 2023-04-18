import React, { useState } from "react";

const Input = ({ addNewTask , numberOfTasks }) => {
  const [ numberOfTasksAdded, setNumberOfTasksAdded] = useState(0);
  const [newInput, setNewInput] = useState("");
  const [newPriority, setNewPriority] = useState("Crucial");
  const [newDate, setNewDate] = useState(new Date().toISOString().slice(0, 10));

  const validateInput = (input) => {
    if (input.trim() === "") return false;
    else return true;
  };

  const normalizeInput = (input) => {
    let spacelessLowerCaseString = input.trim().toLowerCase();
    let capitalizedString =
      spacelessLowerCaseString.charAt(0).toUpperCase() +
      spacelessLowerCaseString.slice(1);
    return capitalizedString;
  };

  const pushNewTaskObject = () => {
    if (validateInput(newInput)) {
      let normalizedTask = normalizeInput(newInput);
      addNewTask({
        taskId: numberOfTasksAdded,
        taskDate: newDate,
        taskLabel: normalizedTask,
        taskPriority: newPriority,
      });
      setNumberOfTasksAdded((tasksAdded) => tasksAdded+1 )
      setNewInput("");
      setNewPriority("Crucial");
      setNewDate(new Date().toISOString().slice(0, 10));
    }
    
  };
  
  const numberOfTasksString= numberOfTasks.toString().padStart(2, '0');

  return (
    <>
      <div className="activeTasks">
          Active tasks: {numberOfTasksString}
      </div>
      <div className="task-bar">
        <input
          className="task-input"
          value={newInput}
          onChange={(event) => setNewInput(event.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              pushNewTaskObject();
            }
          }}
          placeholder="Enter new task"
          autoFocus
          
        />
        <select
          className="task-input"
          name="options"
          value={newPriority}
          onChange={(event) => setNewPriority(event.target.value)}
        >
          <option value="Crucial">Crucial</option>
          <option value="Important">Important</option>
          <option value="Minor">Minor</option>
        </select>
        <input
          className="task-input"
          type="date"
          id="datepicker"
          name="datepicker"
          min={new Date()
            .toLocaleDateString("fr-CA")
            .split("/")
            .reverse()
            .join("-")}
          value={newDate}
          onChange={(event) => setNewDate(event.target.value)}
        />
        <svg 
          className="task-input addTask"
          onClick={pushNewTaskObject}
          transform="scale(1.5)"
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          fill="currentColor" 
          viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
        </svg>
      </div>
    </>
  );
};

export default Input;

