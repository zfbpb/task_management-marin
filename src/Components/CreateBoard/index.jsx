import React, { useState } from "react";
import "./board.scss";
import { useNavigate } from "react-router-dom";
import { tasks } from "../../Assets/columnConfig/columnConfig";
const CreateBoard = ({ setCreateBoard, onCreateBoard, boardNames }) => {
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate(); // for new boards route
  const handleClose = () => {
    setCreateBoard(false);
  };

  // create new routes
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
   

    //boardNames.push(name)
    
    if (!name.trim()) {
      /* setTimeout(() =>{

      }, 500) */
      setNameError("Name cannot be empty"); // Error if input value is 0
      return;
    }
    const updatedBoardNames = [...boardNames, name]

    const route = name.toLowerCase().replace(/ /g, "-");
    //let boardIndex = 3;

    const boardData = { route, name, tasks };
    const existingBoards = JSON.parse(localStorage.getItem("boards") || "[]");
    console.log(existingBoards);
    existingBoards.push(boardData);
    localStorage.setItem("boards", JSON.stringify(existingBoards));

    onCreateBoard(boardData, updatedBoardNames);
   
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
