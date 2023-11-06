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
  const [selectedBoard, setSelectedBoard] = useState(null); // this line to hold the selected board
  const [boardName, setBoardName] = useState(""); // this state to hold new name for board
  
  const [isVisible, setIsVisible] = useState(false); // state for visibility of dropdown menu
  const [editContainerVisible, setEditContainerVisible] = useState(true);
  
  const showHeaderIcon = <img src={showIcon} alt="eye icon" />;
  const navigate = useNavigate();

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
    const updatedBoards = boards.filter((board) => board.name !== boardName);
    setBoards(updatedBoards);
    localStorage.setItem("boards", JSON.stringify(updatedBoards));
  };

  //                                                    new

  const toggleMenu = () => {
    setIsVisible((prev) => !prev);
  };
  //console.log("data", data);

  // Modify handleDeleteBoard:
  const handleDeleteBoard = () => {
    if (selectedBoard) {
      deleteBoard(selectedBoard.name);
      navigate("/");
    }
  };

  //close menu with click outside of box
  const dropdownRef = useRef(null);
  const dropdownEditRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        (dropdownRef.current && 
          !dropdownRef.current.contains(event.target)) 
        &&
        (dropdownEditRef.current &&
          !dropdownEditRef.current.contains(event.target))
      ) {
        setIsVisible(false);
        setEditContainerVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleEditBoard = () => {
    setIsVisible((prev) => !prev);
    setEditContainerVisible((prev) => !prev);
  };
  /* const handleEditBoard = (name) => {
    setBoards(name.target.value);
  }; */

  const handleEditBoard = () => {
    if (selectedBoard && boardName) {
      // Update the name of the selected board
      const updatedBoards = boards.map((board) => {
        if (board.name === selectedBoard.name) {
          return { ...board, name: boardName };
        } else {
          return board;
        }
      });

      setBoards(updatedBoards); // update state with new name
      setSelectedBoard(null); // relase of selected board
      setEditContainerVisible(false); // hide editContainer
      setBoardName(""); // clear input
    }
  };
  //console.log(boards)
  return (
    <div
      className={`layoutContainer ${theme} ${createBoard ? "blur" : ""}
      `}
    >
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
      <Main
        boards={boards}
        deleteBoard={deleteBoard}
        setSelectedBoard={setSelectedBoard}
      />
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
        <button onClick={toggleEditBoard} className="editButton">
          Edit Board
        </button>
      </div>
      <div
        className={`editContainer ${editContainerVisible ? "visible" : ""}`}
        ref={dropdownEditRef}
      >
        <input
          type="text"
          onChange={(e) => setBoardName(e.target.value)}
          value={boardName}
        />
        <button className="editButton" onClick={handleEditBoard}>
          Edit
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
