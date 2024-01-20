import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Theme";
import BoardContainer from "../BoardContainer/BoardContainer";
import NewColumn from "../NewColumn/NewColumn";

const PlatformLaunch = ({ data, onDragEnd, updateDataInMain }) => {
  const { theme } = useContext(ThemeContext);
  const [columns, setColumns] = useState(data.boards[0].columns);

  const boardData = data?.boards?.[0];
  const boardName = boardData?.name;

  const allID = [];
  data.boards.forEach((board) => {
    board.columns.forEach((column) => {
      column.tasks.forEach((task) => {
        allID.push(task.id);
      });
    });
  });

  //console.log("allID", allID);

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
      console.log(newTask.id);
      // Clone and update the "Todo" column with the new task
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
      updateDataInMain({ columns: updatedColumns }, 0);
    }
  };

  return (
    <div className={`platform-container ${theme}`}>
      <div className="title">
        <h1>{boardName}</h1>
      </div>
      <div className="wrapper-horizontal">
        <BoardContainer
          data={{ boards: [{ columns }] }}
          boardIndex={0}
          onDragEnd={onDragEnd}
        />
        <NewColumn addNewColumn={addNewColumn} />
      </div>
    </div>
  );
};

export default PlatformLaunch;
