import React, { useState, useEffect } from "react";
import "./platform.scss";
import initialData from "../../Assets/data/data.json";
import Card from "../../Assets/drag-drop/Card";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const PlatformLaunch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Load data
    setData(initialData);
  }, []);
  const moveCard = (fromIndex, toIndex) => {
    
    const updatedTasks = Array.from(data.boards[0].columns[0].tasks);
    const [movedItem] = updatedTasks.splice(fromIndex, 1);
    updatedTasks.splice(toIndex, 0, movedItem);

    setData(prevData => ({
      ...prevData,
      boards: [{
        ...prevData.boards[0],
        columns: [{
          ...prevData.boards[0].columns[0],
          tasks: updatedTasks
        }]
      }]
    }));
  };
  return (
    <div className="platform-container">
      <DndProvider backend={HTML5Backend}>
        <h4 className="title">{data.boards?.[0].name}</h4>
        {data.boards?.[0]?.columns?.[0]?.tasks?.map((task, index) => (
          <Card id={index} key={task.id} className="task-title" text={task.title} moveCard={moveCard} index={index}/>
        ))}
      </DndProvider>
    </div>
  );
};

export default PlatformLaunch;
