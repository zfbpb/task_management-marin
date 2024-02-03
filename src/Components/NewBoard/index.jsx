import React, { useContext, useState } from "react";
import "./newboard.scss";

import { ThemeContext } from "../../Theme";
import NewColumn from "../NewColumn/NewColumn";
import BoardContainer from "../BoardContainer/BoardContainer";
import { tasks } from "../../Assets/columnConfig/columnConfig";

const NewBoard = ({ data, onDragEnd, boardIndex }) => {
  const { theme } = useContext(ThemeContext);
  const [columns] = useState(tasks);

  return (
    <div className={`newboard-container ${theme}`}>
      <div className="title">
        <h1>{data?.name}</h1>
      </div>
      <div className="wrapper-horizontal">
        <BoardContainer
          data={{ boards: [{ columns }] }}
          boardIndex={boardIndex}
          onDragEnd={onDragEnd}
        />
        <NewColumn />
        {/* addNewColumn={addNewColumn}  */}
      </div>
    </div>
  );
};

export default NewBoard;
