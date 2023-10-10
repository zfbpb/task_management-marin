import React, { useState, useEffect } from "react";
import "./platform.scss";
import initialData from "../../Assets/data/data.json";

const PlatformLaunch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Load data
    setData(initialData);
    //const savedData = localStorage.getItem("boards_data");
    //setData(savedData ? JSON.parse(savedData) : initialData);
  }, []);

  /*   useEffect(() => {
    // Save data to localStorage whenever it changes
    localStorage.setItem("boards_data", JSON.stringify(data));
  }, [data]); */

  /*  // update function
  const updateBoardName = (boardId, newName) => {
    const updatedData = data.map((board) =>
      board.id === boardId ? { ...board, name: newName } : board
    );
    setData(updatedData);
  };
 */
  //console.log("some", initialData);
  //console.log("boards", data.boards[0])

  /* 
  const { theme } = useContext(ThemeContext);
  <div className={`platform-container ${theme}`}></div> 
  */
  return (
    <div className="platform-container">
      {data.boards && <h4>{data.boards[0].name}</h4>}

      {/* <p>{data.boards?.[0].columns?.[0].tasks?.[0].title}</p>
      <p>{data.boards?.[0].columns?.[0].tasks?.[1].title}</p>
      <p>{data.boards?.[0].columns?.[0].tasks?.[2].title}</p>
      <p>{data.boards?.[0].columns?.[0].tasks?.[3].title}</p> */}

      {data.boards?.[0]?.columns?.[0]?.tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}

      {/* {data.boards && data.boards.map((board) => (
        <div key={board.id} className="board">{board[0]}</div>
      ))} */}
    </div>
  );
};

export default PlatformLaunch;
