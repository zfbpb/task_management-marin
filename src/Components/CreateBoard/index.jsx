import React, { useState } from "react";
import "./board.scss";
import { useNavigate } from "react-router-dom";

const CreateBoard = ({ setCreateBoard, onCreateBoard, boardNames }) => {
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate(); // for new boards route
  const handleClose = () => {
    setCreateBoard(false);
  };

  //console.log(boards);
  // create new routes
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(boardNames);

    boardNames.push(name)
    
    if (!name.trim()) {
      /* setTimeout(() =>{

      }, 500) */
      setNameError("Name cannot be empty"); // Error if input value is 0
      return;
    }

    const route = name.toLowerCase().replace(/ /g, "-");
    //let boardIndex = 3;

    const boardData = { route, name };

    const existingBoards = JSON.parse(localStorage.getItem("boards") || "[]");
    existingBoards.push(boardData);
    localStorage.setItem("boards", JSON.stringify(existingBoards));

    onCreateBoard(boardData);
    navigate(`/${route}`);
    handleClose();
  };
  //console.log(boardData);
  return (
    <div className="create-boardContainer">
      <p className="board-title">Add New Board</p>
      <button className="close-btn" onClick={handleClose}>
        X
      </button>
      <form action="" className="board-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        {nameError && (
          <div className="errorMsg">
            <p>{nameError}</p>
          </div>
        )}

        <label htmlFor="columns">Columns</label>
        <input type="text" id="columns" name="columns" />
        <div className="submit-btn-wrapper">
          <button>+ Add New Column</button>
          <button type="submit">Create New Board</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBoard;
