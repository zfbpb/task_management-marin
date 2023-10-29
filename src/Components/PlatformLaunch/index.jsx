import React, { useContext } from "react";
import initialData from "../../Assets/data/data.json";
import Card from "../../Assets/drag-drop/Card";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { ThemeContext } from "../../Theme";
import "./platform.scss";
import useDragEnd from "../../Assets/drag-end/useDragEnd";
/* import ScrollContainer from "react-indiana-drag-scroll"; */

const PlatformLaunch = () => {
  const { theme } = useContext(ThemeContext);
  const [data, handleDragEnd] = useDragEnd(initialData)
 
  const columnOneNum = data.boards?.[0].columns[0].tasks?.length;
  const columnTwoNum = data.boards?.[0].columns[1].tasks?.length;
  const columnThreeNum = data.boards?.[0].columns[2].tasks?.length;

  return (
    <div className={`platform-container ${theme}`}>
      <div className="title">
        <h1>{data.boards?.[0].name}</h1>
      </div>
     
      <div className="platform-wrapper-vertical">
        <div className="platform-wrapper-horizontal">
          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="column-wrapper">
              <p>
                <span className="ball blue-ball"></span>
                {data.boards?.[0].columns[0].name}({columnOneNum})
              </p>
              <Droppable droppableId={data.boards[0].columns[0].id.toString()}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps} className="card-placeholder">
                    {data.boards?.[0]?.columns?.[0]?.tasks?.map(
                      (task, index) => (
                        <Card
                          key={task.id}
                          id={task.id}
                          text={task.title}
                          index={index}
                        />
                      )
                    )}
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
                  <div ref={provided.innerRef} {...provided.droppableProps} className="card-placeholder">
                    {data.boards?.[0]?.columns?.[1]?.tasks?.map(
                      (task, index) => (
                        <Card
                          key={task.id}
                          id={task.id}
                          text={task.title}
                          index={index}
                        />
                      )
                    )}
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
                  <div ref={provided.innerRef} {...provided.droppableProps} className="card-placeholder">
                    {data.boards?.[0]?.columns?.[2]?.tasks?.map(
                      (task, index) => (
                        <Card
                          key={task.id}
                          id={task.id}
                          text={task.title}
                          index={index}
                        />
                      )
                    )}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
          <div className="new-column">New Column +</div>
        </div>
        </div>
       
    </div>
  );
};
export default PlatformLaunch;
