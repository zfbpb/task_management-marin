import React, { useContext } from "react";
//import initialData from "../../Assets/data/data.json";
import { ThemeContext } from "../../Theme";
import BoardContainer from "../BoardContainer/BoardContainer";
import "./platform.scss";

const PlatformLaunch = ({ data, onDragEnd }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`platform-container ${theme}`}>
      <div className="title">
        <h1>{data?.boards?.[0].name}</h1>
      </div>
      <div className="platform-wrapper-vertical">
        <div className="platform-wrapper-horizontal">
          <BoardContainer data={data} boardIndex={0} onDragEnd={onDragEnd} />
          {/* {provided.placeholder} */}
          {/* {isEmptyColumn[column.id] && <div className="empty">Empty</div>} */}
          <div className="new-column">New Column +</div>
        </div>
      </div>
    </div>
  );
};

export default PlatformLaunch;
