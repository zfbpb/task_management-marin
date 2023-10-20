import React, { useContext, useState } from "react";
import initialData from "../../Assets/data/data.json";
import Card from "../../Assets/drag-drop/Card";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { ThemeContext } from "../../Theme";
import "./platform.scss";

const PlatformLaunch = () => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState(initialData);

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

      return { ...prevData, boards: updatedBoards };
    });
  };
  const columnOneNum = data.boards?.[0].columns[0].tasks?.length;
  const columnTwoNum = data.boards?.[0].columns[1].tasks?.length;
  const columnThreeNum = data.boards?.[0].columns[2].tasks?.length;

  return (
    <div className={`platform-container ${theme}`}>
      <div className="title">
        <h1>{data.boards?.[0].name}</h1>
      </div>
      {/* board name */}
      {/* <div className="board-name">
      </div> */}
      <div className="platform-wrapper">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="column-wrapper">
            <p>
              <span className="ball blue-ball"></span>
              {data.boards?.[0].columns[0].name}({columnOneNum})
            </p>

            <Droppable droppableId={data.boards[0].columns[0].id.toString()}>
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
          </div>
          <div className="column-wrapper">
            <p>
              <span className="ball purple-ball"></span>
              {data.boards?.[0].columns[1].name}({columnTwoNum})
            </p>

            <Droppable droppableId={data.boards[0].columns[1].id.toString()}>
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
          </div>
          <div className="column-wrapper">
            <p>
              <span className="ball green-ball"></span>
              {data.boards?.[0].columns[2].name}({columnThreeNum})
            </p>
            <Droppable droppableId={data.boards[0].columns[2].id.toString()}>
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
          </div>
        </DragDropContext>
        <div className="new-column">New Column +</div>
      </div>
    </div>
  );
};
export default PlatformLaunch;
