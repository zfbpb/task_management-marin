import React, { useState } from "react";
import "./board.scss";
import { useNavigate } from "react-router-dom";
const CreateBoard = ({ setCreateBoard, onCreateBoard }) => {
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate(); // for new boards route

  const handleClose = () => {
    setCreateBoard(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (!name.trim()) {
      setNameError("Name cannot be empty"); // Error if input value is 0
      return;
    }

    const route = name.toLowerCase().replace(/ /g, "-");

    const existingBoards = JSON.parse(localStorage.getItem("boards") || "[]");

    existingBoards.push(name)
    const id = existingBoards.length
    //const id = existingBoards.length <= 3 ? existingBoards.length + 1 : 3;
 /*  for (let id = 3; newID < id; newID++) {
    const element = array[id];
    
  } */
  //console.log(existingBoards);
    const boardData = { route, name, id };
    //console.log(existingBoards.length);
    console.log("boardData",boardData);

    //existingBoards.push(boardData);
    localStorage.setItem("boards", JSON.stringify(existingBoards));
    onCreateBoard(boardData);

    navigate(`/${route}`);
    handleClose();
  };

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
