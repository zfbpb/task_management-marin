import React, { useContext } from "react";
import "./newboard.scss";

import { ThemeContext } from "../../Theme";
import NewColumn from "../NewColumn/NewColumn";
import BoardContainer from "../BoardContainer/BoardContainer";
import { data } from "../../Assets/columnConfig/columnConfig";

const NewBoard = ({ onDragEnd, boardIndex }) => {
  const { theme } = useContext(ThemeContext);
  //const [columns] = useState(newOne.boards[boardIndex].columns);
  /* 
  const newBoardData = data.boards[boardIndex].columns;
  console.log(data);
  console.log("NewBoardIndex",boardIndex); */
  /* console.log("NewBoard-NewOne", newOne.columns);
  console.log(boardIndex);
  console.log("NewBoard", data); */
  return (
    <div className={`newboard-container ${theme}`}>
      <div className="title">
        <h1>{data?.name}</h1>
      </div>
      <div className="wrapper-horizontal">
        <BoardContainer
          data={data}
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
