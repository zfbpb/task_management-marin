import React, { useContext, useEffect, useState } from "react";
import "./newboard.scss";

import { ThemeContext } from "../../Theme";
import NewColumn from "../NewColumn/NewColumn";
import BoardContainer from "../BoardContainer/BoardContainer";

const NewBoard = ({ data, setSelectedBoard, onDragEnd, boardIndex }) => {
  const { theme } = useContext(ThemeContext);
  const columnConfig = [
    {
      id: 1,
      name: "Todo",
      tasks: [],
    },
    /*  {
      id:2,
      name: "Column 2",
      tasks: [],
    } */
  ];
  const [columns, setColumn] = useState(columnConfig || []);

  useEffect(() => {
    setSelectedBoard(data); // Setting selected board

    // Cleanup function to clear the selected board
    return () => {
      setSelectedBoard(null);
    };
  }, [data, setSelectedBoard]);
  //console.log(data); --> route,name

  //const columnConfig = [0:{name:"Now", id:0, tasks: Array(2)}, 1:{}]
  // columns[0].tasks[{id:20, title: "blbalafas", description:"", status:"Now"}, {}]

  //columnColors[columnConfig.name] || "ball";

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
        {/* {data?.columns ? (
        ) : (
          <p>Create Columns </p>
        )} */}
        <NewColumn />
      </div>
    </div>
  );
};

export default NewBoard;
