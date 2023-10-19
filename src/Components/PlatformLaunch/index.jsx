import React, { useContext, useState } from "react";
import initialData from "../../Assets/data/data.json";
import Card from "../../Assets/drag-drop/Card";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { ThemeContext } from "../../Theme";
import "./platform.scss";

const PlatformLaunch = () => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState(initialData);

  const moveCard = (fromIndex, toIndex) => {
    setData((prevData) => {
      const updatedBoards = [...prevData.boards];
      const updatedTasks = [...updatedBoards[0].columns[0].tasks];
      const [movedItem] = updatedTasks.splice(fromIndex, 1);
      updatedTasks.splice(toIndex, 0, movedItem);

      updatedBoards[0].columns[0].tasks = updatedTasks;

      return { ...prevData, boards: updatedBoards };
    });
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    moveCard(result.source.index, result.destination.index);
  };

  return (
    <div className={`platform-container ${theme}`}>
      <div className="title">
        <h1>{data.boards?.[0].name}</h1>
      </div>
      {/* board name */}
      <div className="board-name">
      <p>
        <span className="ball blue-ball"></span>
        {data.boards?.[0].columns[0].name}(num)
      </p>
      <p>
        <span className="ball purple-ball"></span>
        {data.boards?.[0].columns[1].name}(num)
      </p>
      <p>
        <span className="ball green-ball"></span>
        {data.boards?.[0].columns[2].name}(num)
      </p>
      </div>
      <div className="platform-wrapper">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="board">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {data.boards?.[0]?.columns?.[0]?.tasks?.map((task, index) => (
                  <Card
                    key={task.id}
                    id={task.id}
                    text={task.title}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="board2">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {data.boards?.[0]?.columns?.[1]?.tasks?.map((task, index) => (
                  <Card
                    key={task.id}
                    id={task.id}
                    text={task.title}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="board3">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {data.boards?.[0]?.columns?.[2]?.tasks?.map((task, index) => (
                  <Card
                    key={task.id}
                    id={task.id}
                    text={task.title}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div className="new-column">New Column +</div>
      </div>
    </div>
  );
};
export default PlatformLaunch;
