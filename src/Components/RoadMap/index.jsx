import React from "react";
import "./roadmap.scss"
import BoardContainer from "../BoardContainer/BoardContainer";

const RoadMap = ({data, onDragEnd}) => {
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
