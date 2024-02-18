import React, { useContext, useEffect } from "react";
import "./newboard.scss";

import { ThemeContext } from "../../Theme";
import NewColumn from "../NewColumn/NewColumn";
import BoardContainer from "../BoardContainer/BoardContainer";
import { data } from "../../Assets/columnConfig/columnConfig";

const NewBoard = ({ onDragEnd, board, setSelectedBoard }) => {
  const { theme } = useContext(ThemeContext);

useEffect(() => {
  setSelectedBoard(board); // Setting selected board

  // Cleanup function to clear the selected board 
  return () => {
    setSelectedBoard(null);
  };
}, [board, setSelectedBoard]);

  const { id } = board;
  return (
    <div className={`newboard-container ${theme}`}>
      <div className="title">
        <h1>{board?.name}</h1>
      </div>
      <div className="wrapper-horizontal">
        <BoardContainer
          data={data}
          id={id}
          boardIndex={id}
          onDragEnd={onDragEnd}
        />
        <NewColumn />
        {/* addNewColumn={addNewColumn}  */}
      </div>
    </div>
  );
};

export default NewBoard;
