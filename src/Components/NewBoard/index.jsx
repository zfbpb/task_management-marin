import React, { useContext, useEffect, useState } from "react";
import "./newboard.scss";

import { ThemeContext } from "../../Theme";
import NewColumn from "../NewColumn/NewColumn";
import BoardContainer from "../BoardContainer/BoardContainer";
import { columnColors } from "../../Assets/columnColors/columnColors";

const NewBoard = ({ data, setSelectedBoard, onDragEnd, boardIndex }) => {
  const { theme } = useContext(ThemeContext);
  const columnConfig = [
    {
      id: 211221211,
      name: "Todo",
      tasks: [
        {
          id: 1,
          title: "Build UI for onboarding flow",
          description: "",
          status: "Todo",
          statusId: 0,
        },
      ],
      color: columnColors["Todo"],
    },
    {
      id: 11111111112,
      name: "Doing",
      tasks: [
        {
          id: 0,
          title: "Build UI for onboarding flow222",
          description: "",
          status: "Todo",
          statusId: 0,
        },
      ],
      color: "blue-ball",
    },
  ];
  const [columns] = useState(columnConfig);


 
  useEffect(() => {
    setSelectedBoard(data); // Setting selected board
    
    // Cleanup function to clear the selected board
    return () => {
      setSelectedBoard(null);
    };
  }, [data, setSelectedBoard]);

  
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
          columnConfig={columnConfig}
        />
        <NewColumn />
        {/* addNewColumn={addNewColumn}  */}
      </div>
    </div>
  );
};

export default NewBoard;
