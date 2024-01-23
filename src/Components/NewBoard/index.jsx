import React, { useContext, useEffect, useState } from "react";
import "./newboard.scss";

import { ThemeContext } from "../../Theme";
import NewColumn from "../NewColumn/NewColumn";
import BoardContainer from "../BoardContainer/BoardContainer";

const NewBoard = ({ data, setSelectedBoard, onDragEnd, boardIndex }) => {
  const { theme } = useContext(ThemeContext);
  const columnConfig = [
    {
      id: 211221211,
      name: "Todo",
      tasks: [
        {
          id: 0,
          title: "Build UI for onboarding flow",
          description: "",
          status: "Todo",
          statusId: 0,
        },
      ],
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
    },
  ];
  const [columns, setColumn] = useState(columnConfig);

  useEffect(() => {
    setSelectedBoard(data); // Setting selected board

    // Cleanup function to clear the selected board
    return () => {
      setSelectedBoard(null);
    };
  }, [data, setSelectedBoard]);
  //console.log(data); --> route,name

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
      </div>
    </div>
  );
};

export default NewBoard;
