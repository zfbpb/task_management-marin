import React from "react";
import initialData from "../../Assets/data/data.json";
import "./roadmap.scss"

const RoadMap = () => {
  const data = initialData;
  return (
    <div className="roadmap-container">
      <div className="title">
        <h1>{data.boards?.[2].name}</h1>
      </div>
      
    </div>
  );
};

export default RoadMap