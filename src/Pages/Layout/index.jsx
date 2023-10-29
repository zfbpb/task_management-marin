import React, { useContext, useEffect, useRef, useState } from "react";
import "./layout.scss";
import Header from "../Header";
import Main from "../Main";
import { ThemeContext } from "../../Theme";
import showIcon from "../../Icons/icon-show-sidebar.svg";
import CreateBoard from "../../Components/CreateBoard";
import { IconEllipsis } from "../../Assets/three-dots/IconEllipsis";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const { theme } = useContext(ThemeContext);

  const [hideHeader, setHideHeader] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [createBoard, setCreateBoard] = useState(false);
  const [boards, setBoards] = useState([]); // for keeping tack of the boards
  const showHeaderIcon = <img src={showIcon} alt="eye icon" />;

  const [selectedBoard, setSelectedBoard] = useState(null); // Add this line to hold the selected board

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


//                                                    new
const navigate = useNavigate()
const [isVisible, setIsVisible] = useState(false);
const toggleMenu = () => {
  setIsVisible((prev) => !prev);
};
//console.log("data", data);


// ... other useEffects and functions

// Modify handleDeleteBoard:
const handleDeleteBoard = () => {
  if (selectedBoard) {
    deleteBoard(selectedBoard.name);
    navigate("/");
  }
};

//close menu with click outside of box
const dropdownRef = useRef(null)
useEffect(() => {
  function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsVisible(false);
      }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
      document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <div className={
      `layoutContainer ${theme} ${createBoard ? "blur" : ""}
      `}>
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
      <Main boards={boards} deleteBoard={deleteBoard}  setSelectedBoard={setSelectedBoard}/>
      <button className="three-dots-button" onClick={toggleMenu}>
        <IconEllipsis />
      </button>
      <div
        className={`dropdown-menu 
        ${isVisible ? "visible" : ""}
        `}
        ref={dropdownRef}
      >
        {/* {currentBoard && currentBoard.userCreated && ( */}
        <button onClick={handleDeleteBoard} className="deleteButton">
          Delete Board
        </button>
        <button /* onClick={editAction} */ className="editButton">
          Edit Board
        </button>
      </div>
      
      {createBoard && (
        <CreateBoard
          setCreateBoard={setCreateBoard}
          onCreateBoard={handleCreateBoard}
        />
      )}
    </div>
  );
};

export default Layout;
