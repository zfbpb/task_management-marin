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
  const savedBoards = JSON.parse(localStorage.getItem("boards")) || [];
  const { theme } = useContext(ThemeContext);

  const [hideHeader, setHideHeader] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [createBoard, setCreateBoard] = useState(false); // state for showing or hiding CreateBoard component
  const [boards, setBoards] = useState(savedBoards); // for keeping track a list of boards
  const [selectedBoard, setSelectedBoard] = useState(null); // this line to hold the selected board
  const [boardName, setBoardName] = useState(""); // this state to hold new name for board

  const [isVisible, setIsVisible] = useState(false); // state for visibility of dropdown menu
  const [editContainerVisible, setEditContainerVisible] = useState(false); // state for visibility edit menu

  const showHeaderIcon = <img src={showIcon} alt="eye icon" />;
  const navigate = useNavigate();

  const toggleHeader = () => {
    setHideHeader((prev) => !prev);
    setShowButton((prev) => !prev);
  };
  // for new boards
  const handleCreateBoard = (boardData) => {
    const updatedBoards = [...boards, boardData];
    setBoards(updatedBoards);
    localStorage.setItem("boards", JSON.stringify(updatedBoards));
  };

  // Load boards from Local Storage
  useEffect(() => {
    const storedBoards = JSON.parse(localStorage.getItem("boards") || "[]");
    setBoards(storedBoards);
  }, []);

  const deleteBoard = (boardName) => {
    const updatedBoards = boards.filter((board) => board.name !== boardName); // a new array of boards including the board to be deleted
    setBoards(updatedBoards); // update state with the new array of boards - removing the selected board
    localStorage.setItem("boards", JSON.stringify(updatedBoards)); // update inside localStorage
  };

  //                                                    new

  const toggleMenu = () => {
    setIsVisible((prev) => !prev);
  };
  //console.log("data", data);

  const handleDeleteBoard = () => {
    try {
      if (selectedBoard) {
        deleteBoard(selectedBoard.name);
        navigate("/");
      }
    } catch (error) {
      console.error("Error navigating:", error);
    }
  };

  //close menu with click outside of box
  const dropdownRef = useRef(null);
  const dropdownEditRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        dropdownEditRef.current &&
        !dropdownEditRef.current.contains(event.target)
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

  const handleEditBoard = () => {
    if (selectedBoard && boardName) {
      const updatedBoards = boards.map((board) => {
        // Create a new array called updatedBoards by mapping through the existing 'boards' array
        if (board.name === selectedBoard.name) {
          // Check if the name of the current 'board' matches the name of the 'selectedBoard'
          return { ...board, name: boardName, route: boardName }; // If the names match, create a new object that is a copy of the 'board' with the 'name' property updated to the new 'boardName'
        } else {
          return board; // If the names does not match, simply include the current 'board' in the new array without modifications.
        }
      });

      setBoards(updatedBoards); // update state with new name
      setSelectedBoard(null); // clear the selected board
      setEditContainerVisible(false); // hide editContainer
      setBoardName(""); // clear input

      localStorage.setItem("boards", JSON.stringify(updatedBoards)); // to ensure new board name and routed is updated in localStorage
      const editedBoard = updatedBoards.find(
        // search through updatedBoards to find an object(board) where name matches the boardName
        (board) => board.name === boardName
      );

      if (editedBoard) {
        navigate(`/${editedBoard.route}`); // navigate to route with new name, old properties
      }
    }
  };
  //  console.log(boards);
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
        //boardNamesLinks={boardNamesLinks}
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
        <p>Edit Board name:</p>
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
