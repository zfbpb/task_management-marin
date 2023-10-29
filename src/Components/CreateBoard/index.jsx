import React from "react";
import "./board.scss";
import { useNavigate } from "react-router-dom";

const CreateBoard = ({ setCreateBoard, onCreateBoard }) => {
const navigate = useNavigate() // for new boards route
  const handleClose = () => {
    setCreateBoard(false);
  };

  // create new routes
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
   
    const route = name.toLowerCase().replace(/ /g, "-")
    const boardData = {route ,name}

    const existingBoards = JSON.parse(localStorage.getItem("boards") || "[]")
    existingBoards.push(boardData)

    //console.log("boardData", boardData)

    localStorage.setItem("boards", JSON.stringify(existingBoards))

    onCreateBoard(boardData);
    navigate(`/${route}`)
    handleClose()
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
