import React from "react";
import "./board.scss";
const CreateBoard = ({setCreateBoard}) => {
  
const handleClose = () =>{
  setCreateBoard(false)
}
  return (
    <div className="create-boardContainer">     
        <p className="board-title">Create Board</p>
        <button className="close-btn" onClick={handleClose}>X</button>   
    </div>
  );
};

export default CreateBoard;
