import React from "react";
import initialData from "../../Assets/data/data.json";
import "./roadmap.scss"
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import Card from "../../Assets/drag-drop/Card";

const RoadMap = () => {
  const data = initialData;

/*   const columnColors = {
    Todo: "blue-ball",
    Doing: "purple-ball",
  }; */
const onDragEnd = () =>{
  return;
}
  return (
    <div className="roadmap-container">
      <div className="title">
        <h1>{data.boards?.[2].name}</h1>
      </div>
      <div className="platform-wrapper-vertical">
        <div className="platform-wrapper-horizontal">
          <DragDropContext onDragEnd={onDragEnd}>
            {data.boards?.[0].columns.map((column, index) => {

              const columnNum = column.tasks?.length;
              //const columnColorClass = columnColors[column.name] || "ball";

              
              return (
                <div className="column-wrapper" key={column.id}>
                  <p>
                    <span className={`ball `}></span>{/* ${columnColorClass} */}
                    {column.name}({columnNum})
                  </p>

                  <Droppable droppableId={column.id.toString()}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {data.boards?.[2]?.columns?.[index]?.tasks?.map(
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
                        {/* {isEmptyColumn[column.id] && ( */}
                          <div className="empty">Empty</div>
                       {/*  )} */}
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

export default RoadMap;
