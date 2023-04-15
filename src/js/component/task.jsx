import React from "react";

const Task = ({ listOfTasksLastItem , taskIndex, taskNumber, taskId, taskLabel, taskPriority, taskDate, deleteTask, raiseTask, lowerTask }) => {
    const isFirstTask = taskIndex === 0;
    console.log(isFirstTask);
    const isLastTask = taskIndex === listOfTasksLastItem;
    console.log(isLastTask);

    return (
        <div key={taskIndex} className="task-container mx-auto my-1">
            <span className="taskNumber">
                #{taskNumber.toString().padStart(2, '0')}
            </span>
            <span className="taskId">
                ID: {taskId}
            </span>
             <span className="taskDate"> 
                {taskDate}
            </span>
            <span className="taskLabel">
                {taskLabel}
            </span>
            <span className={`tag ${(taskPriority === "Crucial") ? "bg-danger" : (taskPriority === "Important") ? "bg-warning" : "bg-success"}`}>
                {taskPriority}
            </span>
            <span onClick={() => raiseTask(taskNumber-1)}
            >
                <svg 
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="iconUp" viewBox="0 0 16 16">
                <path d="M8 11a.5.5 0 0 0 .5-.5V6.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 .5.5z"/>
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                </svg>
            </span>
            <span onClick={() => lowerTask(taskNumber-1)}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="iconDown" viewBox="0 0 16 16">
                <path d="M8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z"/>
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                </svg>
            </span>
            <span 
            onClick={() => deleteTask(taskNumber-1)}
            >
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                className="deleteIcon" 
                viewBox="0 0 16 16">
                <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.854 6.146 8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708z"/>
                </svg>
            </span>
        </div>
    )
    
}

export default Task;
