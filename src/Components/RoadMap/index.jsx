import React, { useContext, useState } from "react";
import BoardContainer from "../BoardContainer/BoardContainer";
import { ThemeContext } from "../../Theme";
import NewColumn from "../NewColumn/NewColumn";

const RoadMap = ({ data, onDragEnd, updateDataInMain }) => {
  const { theme } = useContext(ThemeContext);
  const [columns, setColumns] = useState(data.boards[2].columns);

  const boardData = data?.boards?.[2];
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
    let todoColumn = columns.find((column) => column.name === "Now");
    if (todoColumn) {
      const newTask = {
        id: allID.length,
        title: description,
        description: "",
        statusId: 0,
        status: "Now",
      };

      const updatedColumns = columns.map((column) => {
        if (column.name === "Now") {
          return {
            ...column,
            tasks: [...column.tasks, newTask],
          };
        }
        return column;
      });

      setColumns(updatedColumns);
      updateDataInMain({ columns: updatedColumns }, 2);
    }
  };

   // console.log("RoadMap",data);
  return (
    <div className={`roadmap-container ${theme}`}>
      <div className="title">
        <h1>{boardName}</h1>
      </div>
      <div className="wrapper-horizontal">
      <BoardContainer data={data} boardIndex={2} onDragEnd={onDragEnd} />
        <NewColumn addNewColumn={addNewColumn} />
      </div>
    </div>
  );
};

export default RoadMap;
