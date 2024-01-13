import React, { useContext } from "react";
import { ThemeContext } from "../../Theme";
import BoardContainer from "../BoardContainer/BoardContainer";

const PlatformLaunch = ({ data, onDragEnd }) => {
  const { theme } = useContext(ThemeContext);

  // Check if data and boards are present and have the expected structure
  const boardData = data?.boards?.[0];
  const boardName = boardData?.name || "";

  return (
    <div className={`platform-container ${theme}`}>
      <div className="title">
        <h1>{boardName}</h1>
      </div>
      <div className="platform-wrapper-vertical">
        <div className="platform-wrapper-horizontal">
          {/* Pass the correct board data to BoardContainer */}
          <BoardContainer data={data} boardIndex={0} onDragEnd={onDragEnd} />
          <div className="new-column">New Column +</div>
        </div>
      </div>
    </div>
  );
};

export default PlatformLaunch;
