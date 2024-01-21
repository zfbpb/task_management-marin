import React, { useContext, useEffect } from "react";
import "./newboard.scss";

import { ThemeContext } from "../../Theme";
import NewColumn from "../NewColumn/NewColumn";
import BoardContainer from "../BoardContainer/BoardContainer";

const NewBoard = ({ data, setSelectedBoard, onDragEnd }) => {
  const { theme } = useContext(ThemeContext);

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
        {data?.columns ? (
        <BoardContainer
          data={data}
          boardIndex={4}
          onDragEnd={onDragEnd}
        />
        ) : (
          <p>Loading .... </p>
        )}
        <NewColumn />
      </div>

    </div>
  );
};

export default NewBoard;
