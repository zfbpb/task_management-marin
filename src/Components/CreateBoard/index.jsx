import React from "react";
import "./board.scss";
const CreateBoard = ({ setCreateBoard }) => {
  const handleClose = () => {
    setCreateBoard(false);
  };
  return (
    <div className="create-boardContainer">
      <p className="board-title">Add New Board</p>
      <button className="close-btn" onClick={handleClose}>
        X
      </button>
      <form action="" className="board-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="columns">Columns</label>
        <input type="text" id="columns" name="columns" />
        <div className="submit-btn-wrapper">
          <button>+ Add New Column</button>
          <button>Create New Board</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBoard;
