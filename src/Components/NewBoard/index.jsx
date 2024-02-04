import React, { useContext, useState } from "react";
import "./newboard.scss";

import { ThemeContext } from "../../Theme";
import NewColumn from "../NewColumn/NewColumn";
import BoardContainer from "../BoardContainer/BoardContainer";
import { newOne } from "../../Assets/columnConfig/columnConfig";

const NewBoard = ({ data, onDragEnd, boardIndex }) => {
  const { theme } = useContext(ThemeContext);
  const [columns] = useState(newOne[boardIndex].columns);

  // Structure the data prop similar to RoadMap
  const newData = {
    boards: [
      {
        id: boardIndex, // Assuming boardIndex should be used as the id
        name: data.name, // Assuming you want to use the name from the provided data
        columns: columns,
      },
    ],
  };

  console.log("NewBoard-NewOne", newOne[boardIndex].columns);
  console.log(boardIndex);

  return (
    <div className={`newboard-container ${theme}`}>
      <div className="title">
        <h1>{data?.name}</h1>
      </div>
      <div className="wrapper-horizontal">
        <BoardContainer
          data={newData}
          boardIndex={boardIndex}
          onDragEnd={onDragEnd}
        />
        <NewColumn />
      </div>
    </div>
  );
};

export default NewBoard;
