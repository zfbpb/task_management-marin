import React, { useContext } from "react";
import BoardContainer from "../BoardContainer/BoardContainer";
import { ThemeContext } from "../../Theme";
import NewColumn from "../NewColumn/NewColumn";

const RoadMap = ({ data, onDragEnd }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`roadmap-container ${theme}`}>
      <div className="title">
        <h1>{data?.boards?.[2].name}</h1>
      </div>
      <div className="wrapper-horizontal">
        <BoardContainer data={data} boardIndex={2} onDragEnd={onDragEnd} />
        <NewColumn />
      </div>
    </div>
  );
};

export default RoadMap;
