import React, { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Input from "./input.jsx";
import Task from "./task.jsx";
import { element } from "prop-types";

// Home component
const Home = () => {
const [listOfTasks, setListOfTasks] = useState([]);
const [parent] = useAutoAnimate({duration: 250});

// Task management functions
  const addTask = (taskObject) => {
    taskObject.taskNumber = (listOfTasks.length + 1).toString().padStart(2, '0');;
    setListOfTasks([...listOfTasks, taskObject]);
  };

  const deleteTask = (index) => {
  const temporaryList = [...listOfTasks];
  temporaryList.splice(index, 1);
  temporaryList.forEach((item,i) => item.taskNumber = i+1)
  setListOfTasks(temporaryList);
};

const raiseTask = (index) => {
  if (index <= 0) return false;
  const temporaryList = [...listOfTasks];
  const temporaryItem = temporaryList[index];
  temporaryList[index] = temporaryList[index - 1];
  temporaryList[index - 1] = temporaryItem;
  temporaryList.forEach((element, i) => element.taskNumber = i + 1);
  setListOfTasks(temporaryList);
  return true;
};

const lowerTask = (index) => {
  if (index >= listOfTasks.length - 1) return false;
  const temporaryList = [...listOfTasks];
  const temporaryItem = temporaryList[index];
  temporaryList[index] = temporaryList[index + 1];
  temporaryList[index + 1] = temporaryItem;
  temporaryList.forEach((element, i) => element.taskNumber = i +1);  
  setListOfTasks(temporaryList);
  return true;
};

function sortTasksByHigherPriority() {
  const temporaryList = [...listOfTasks];
  temporaryList.sort((a, b) => {
    const priorityOrder = { Crucial: 0, Important: 1, Minor: 2 };
    return priorityOrder[a.listPriority] - priorityOrder[b.listPriority];
  });
  temporaryList.forEach((element, i) => element.taskNumber = i+1);
  setListOfTasks(temporaryList);
}




// JSX element    
  
  const jsxTasks = (
    <div ref={parent}>
      {listOfTasks.map((element, index) => {
        return (
          <div key={index} className="task-wrapper">
            <Task
              taskNumber={element.taskNumber}
              taskId={element.taskId}
              taskLabel={element.taskLabel}
              taskPriority={element.taskPriority}
              taskDate={element.taskDate}
              deleteTask={deleteTask}
              raiseTask={raiseTask}
              lowerTask={lowerTask}
            />
          </div>
        );
      })}
    </div>
  );

  // Final JSX Code
  return (
    <div className="container-fluid vh-100 vw-100 d-flex justify-content-center ">
      <div className="Components">
        <div className="input-bar g-0 py-3">
          <Input addNewTask={addTask} numberOfTasks={listOfTasks.length} />
        </div>
          {jsxTasks}
        </div>
    </div>
  );
  consolelog(listOfTasks);
};

export default Home;
