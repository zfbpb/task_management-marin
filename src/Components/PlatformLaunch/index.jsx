import React, { useContext } from "react";
import { ThemeContext } from "../../Theme";
import BoardContainer from "../BoardContainer/BoardContainer";
import NewColumn from "../NewColumn/NewColumn";

const PlatformLaunch = ({ data, onDragEnd }) => {
  const { theme } = useContext(ThemeContext);

  const boardData = data?.boards?.[0];
  const boardName = boardData?.name || "";

  return (
    <div className={`platform-container ${theme}`}>
      <div className="title">
        <h1>{boardName}</h1>
      </div>
      <div className="wrapper-horizontal">
        <BoardContainer data={data} boardIndex={0} onDragEnd={onDragEnd} />
        <NewColumn />
      </div>
    </div>
  );
};

export default PlatformLaunch;
