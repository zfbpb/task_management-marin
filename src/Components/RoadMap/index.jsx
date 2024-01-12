import React, { useContext } from "react";
import BoardContainer from "../BoardContainer/BoardContainer";
import { ThemeContext } from "../../Theme";

const RoadMap = ({data, onDragEnd}) => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`roadmap-container ${theme}`}>
      <div className="title">
        <h1>{data?.boards?.[2].name}</h1>
      </div>
      <div className="platform-wrapper-vertical">
       
          <div className="new-column">New Column +</div>
       
      </div>
    </div>
  );
};

export default RoadMap;
