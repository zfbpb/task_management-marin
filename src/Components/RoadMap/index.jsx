import React from "react";
//import initialData from "../../Assets/data/data.json";
import "./roadmap.scss"
import BoardContainer from "../BoardContainer/BoardContainer";
//import { DragDropContext, Droppable } from "@hello-pangea/dnd";
//import Card from "../../Assets/drag-drop/Card";

const RoadMap = ({data, onDragEnd}) => {
  //const data = initialData;

/*   const columnColors = {
    Todo: "blue-ball",
    Doing: "purple-ball",
  }; */

  return (
    <div className="roadmap-container">
      <div className="title">
        <h1>{data.boards?.[2].name}</h1>
      </div>
      <div className="platform-wrapper-vertical">
        <div className="platform-wrapper-horizontal">
          <BoardContainer data={data} boardIndex={2} onDragEnd={onDragEnd} />
          <div className="new-column">New Column +</div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
