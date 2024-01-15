import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Theme";
import BoardContainer from "../BoardContainer/BoardContainer";
import NewColumn from "../NewColumn/NewColumn";

const PlatformLaunch = ({ data, onDragEnd }) => {
  const { theme } = useContext(ThemeContext);
  const [columns, setColumns] = useState(data.boards[0].columns);

  const boardData = data?.boards?.[0];
  const boardName = boardData?.name || "";

  console.log(data.boards[0].columns[0].tasks);
  const columnCount = data.boards[0].columns[0].tasks;
  const addNewColumn = (description, newId) => {
    let todoColumn = columns.find((column) => column.name === "Todo");

    if (todoColumn) {
      const newTask = {
        id: generateNewID(newId),
        title: description,
        description: "",
        statusId: "",
        status: "Todo",
      };

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
    }
  };

  const generateNewID = () => {
    let newId = 0;
    for (let i = 0; i < columnCount.length; i++) {
      newId++;
    }
    console.log(newId);
    return newId;
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
