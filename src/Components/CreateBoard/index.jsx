import React, { useState } from "react";
import "./board.scss";
import { useNavigate } from "react-router-dom";

const CreateBoard = ({ setCreateBoard, onCreateBoard, boardNames }) => {
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

    // Get existing board names from localStorage
    const existingBoardNames =
      JSON.parse(localStorage.getItem("boardNames")) || boardNames;

    //console.log("existingBoardNames",existingBoardNames); // shows always 3

    const updatedBoardNames = [...existingBoardNames, name];

    
    localStorage.setItem("boardNames", JSON.stringify(updatedBoardNames));

    const id = updatedBoardNames.length;
   
   //console.log(updatedBoardNames); -->  {route: 'fsfd', name: 'fsfd', id: 5}
    const boardData = { route, name, id };

    
    onCreateBoard(boardData);

    // Navigate to the new board route
    navigate(`/${route}`);

    // Close the create board modal
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
