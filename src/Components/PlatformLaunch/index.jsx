import React, { useContext, useEffect, useState } from "react";
import initialData from "../../Assets/data/data.json";
import Card from "../../Assets/drag-drop/Card";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { ThemeContext } from "../../Theme";
import "./platform.scss";

const PlatformLaunch = () => {
  const { theme } = useContext(ThemeContext);

  // Map column colors to CSS classes
  const columnColors = {
    Todo: "blue-ball",
    Doing: "purple-ball",
    Done: "green-ball",
  };

  // Track whether each column is empty or not
  const [isEmptyColumn, setIsEmptyColumn] = useState({});

  //checking first is there any stored data before initialData loads
  const [data, setData] = useState(() => {
    const localStorageData = localStorage.getItem("boardData");
    return localStorageData ? JSON.parse(localStorageData) : initialData;
  });
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Ignore if the item is dropped outside a column or if there's no destination
    if (!destination) return;

    setData((prevData) => {
      const updatedBoards = [...prevData.boards];

      // Identify source and destination columns
      const sourceColumn = updatedBoards[0].columns.find(
        (column) => column.id.toString() === source.droppableId
      );
      const destinationColumn = updatedBoards[0].columns.find(
        (column) => column.id.toString() === destination.droppableId
      );

      if (sourceColumn && destinationColumn) {
        const [movedTask] = sourceColumn.tasks.splice(source.index, 1);
        destinationColumn.tasks.splice(destination.index, 0, movedTask);
      }

      // Update the isEmptyColumn state
      const isEmpty = updatedBoards[0].columns.reduce((acc, column) => {
        acc[column.id] = column.tasks.length === 0;
        return acc;
      }, {});

      setIsEmptyColumn(isEmpty);

      return { ...prevData, boards: updatedBoards };
    });
  };
  useEffect(() => {
    localStorage.setItem("boardData", JSON.stringify(data));
  }, [data]);

  return (
    <div className={`platform-container ${theme}`}>
      <div className="title">
        <h1>{data.boards?.[0].name}</h1>
      </div>
      <div className="platform-wrapper-vertical">
        <div className="platform-wrapper-horizontal">
          <DragDropContext onDragEnd={onDragEnd}>
            {data.boards?.[0].columns.map((column, index) => {

              const columnNum = column.tasks?.length;
              const columnColorClass = columnColors[column.name] || "ball";

              
              return (
                <div className="column-wrapper" key={column.id}>
                  <p>
                    <span className={`ball ${columnColorClass}`}></span>
                    {column.name}({columnNum})
                  </p>

                  <Droppable droppableId={column.id.toString()}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {data.boards?.[0]?.columns?.[index]?.tasks?.map(
                          (task, taskIndex) => (
                            <Card
                              key={task.id}
                              id={task.id}
                              text={task.title}
                              index={taskIndex}
                            />
                          )
                        )}
                        {provided.placeholder}
                        {isEmptyColumn[column.id] && (
                          <div className="empty">Empty</div>
                        )}
                      </div>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </DragDropContext>
          <div className="new-column">New Column +</div>
        </div>
      </div>
    </div>
  );
};

export default PlatformLaunch;
