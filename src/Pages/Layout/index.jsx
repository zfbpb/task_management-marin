import React, { useContext, useState } from "react";
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

  const toggleHeader = () => {
    setHideHeader((prev) => !prev);
    setShowButton((prev) => !prev);
  };
  // for new boards
  const handleCreateBoard = (boardData) => {
    setBoards((prevBoards) => [...prevBoards, boardData]);
  };

  const showHeaderIcon = <img src={showIcon} alt="eye icon" />;
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
      <Main boards={boards}/>
      {createBoard && <CreateBoard setCreateBoard={setCreateBoard} onCreateBoard={handleCreateBoard}/>}
    </div>
  );
};

export default Layout;
