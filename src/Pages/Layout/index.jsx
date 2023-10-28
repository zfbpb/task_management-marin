import React, { useContext, useEffect, useState } from "react";
import "./layout.scss";
import Header from "../Header";
import Main from "../Main";
import { ThemeContext } from "../../Theme";
import showIcon from "../../Icons/icon-show-sidebar.svg";
import CreateBoard from "../../Components/CreateBoard";

const Layout = () => {
  const { theme } = useContext(ThemeContext);

  const [hideHeader, setHideHeader] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [createBoard, setCreateBoard] = useState(false);
  const [boards, setBoards] = useState([]); // for keeping tack of the boards
  const showHeaderIcon = <img src={showIcon} alt="eye icon" />;

  const toggleHeader = () => {
    setHideHeader((prev) => !prev);
    setShowButton((prev) => !prev);
  };
  // for new boards
  const handleCreateBoard = (boardData) => {
    setBoards((prevBoards) => [...prevBoards, boardData]);
  };
  
  // Load boards from Local Storage
  useEffect(() => {
    const storedBoards = JSON.parse(localStorage.getItem("boards") || "[]");
    setBoards(storedBoards);
}, []);


const deleteBoard = (boardName) => {
  const updatedBoards = boards.filter(board => board.name !== boardName);
  setBoards(updatedBoards);
  localStorage.setItem('boards', JSON.stringify(updatedBoards));
};


  return (
    <div className={`layoutContainer ${theme} ${createBoard ? 'blur' : ''}`}>
      <Header
        toggleHeader={toggleHeader}
        hideHeader={hideHeader}
        setCreateBoard={setCreateBoard}
        boards={boards}
      />
      {showButton && (
        <button className="toggleHeader" onClick={toggleHeader}>
          {showHeaderIcon}
        </button>
      )}
      <Main boards={boards} deleteBoard={deleteBoard} />
      {createBoard && <CreateBoard setCreateBoard={setCreateBoard} onCreateBoard={handleCreateBoard}/>}
    </div>
  );
};

export default Layout;
