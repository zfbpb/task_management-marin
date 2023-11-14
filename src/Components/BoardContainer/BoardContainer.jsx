import React from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import Card from "../../Assets/drag-drop/Card";


const BoardContainer = ({  boardIndex, data, onDragEnd }) => {
 
  const columnColors = {
    Todo: "blue-ball",
    Doing: "purple-ball",
    Done: "green-ball",
  };


  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}> 
        {data.boards[boardIndex]?.columns.map((column, columnIndex) => { //check with ? before map
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
                    {data.boards[boardIndex]?.columns?.[columnIndex]?.tasks?.map(
                      (task, taskIndex) => (
                        <Card
                          key={task.id}
                          id={task.id}
                          text={task.title}
                          index={taskIndex}
                        />
                      )
                    )}
                 {/*  {provided.placeholder}  
                 {isEmptyColumn[column.id] && (
                    
                      <div className="empty">Empty</div>
                    )} */}
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
     {/*  <div className="new-column">New Column +</div> */}
    </>
  );
};

export default BoardContainer;
