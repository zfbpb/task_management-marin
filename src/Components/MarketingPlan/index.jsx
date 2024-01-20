import React, { useContext, useState } from "react";
import BoardContainer from "../BoardContainer/BoardContainer";
import NewColumn from "../NewColumn/NewColumn";
import { ThemeContext } from "../../Theme";

const MarketingPlan = ({ data, onDragEnd, updateDataInMain }) => {
  const { theme } = useContext(ThemeContext);
  const [columns, setColumns] = useState(data.boards[1].columns);

  //console.log(data.boards[1]);

  const boardData = data?.boards?.[1];
  const boardName = boardData?.name;

  const allID = [];
  data.boards.forEach((board) => {
    board.columns.forEach((column) => {
      column.tasks.forEach((task) => {
        allID.push(task.id);
      });
    });
  });

  const addNewColumn = (description) => {
    let todoColumn = columns.find((column) => column.name === "Todo");
    if (todoColumn) {
      const newTask = {
        id: allID.length,
        title: description,
        description: "",
        statusId: 0,
        status: "Todo",
      };

      const updatedColumns = columns.map((column) => {
        if (column.name === "Todo") {
          return {
            ...column,
            tasks: [...column.tasks, newTask],
          };
        }
        return column;
      });

      setColumns(updatedColumns);
      updateDataInMain({ columns: updatedColumns }, 1);
    }
  };

  return (
    <div className={`marketing-container ${theme}`}>
      <div className="title">
        <h1>{boardName}</h1>
      </div>
      <div className="wrapper-horizontal">
        <BoardContainer data={data} boardIndex={1} onDragEnd={onDragEnd} />
        <NewColumn addNewColumn={addNewColumn} />
      </div>
    </div>
  );
};

export default MarketingPlan;
