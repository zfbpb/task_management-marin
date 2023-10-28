import React, { useContext, useEffect, useRef, useState } from "react";
import "./newboard.scss";
import { IconEllipsis } from "../../Assets/three-dots/IconEllipsis";
import { ThemeContext } from "../../Theme";
import { useNavigate } from "react-router-dom";

const NewBoard = ({ data, deleteBoard }) => {

  const navigate = useNavigate()
  const { theme } = useContext(ThemeContext);

  
  const [isVisible, setIsVisible] = useState(false);
  const toggleMenu = () => {
    setIsVisible((prev) => !prev);
  };
  //console.log("data", data);
  
  const handleDeleteBoard = () => {
    deleteBoard(data.name)
    navigate("/")
  }

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
    <div className={`newboard-container ${theme}`}>
      <div className="title">
        <h1>{data?.name}</h1>
        <button className="three-dots-button" onClick={toggleMenu}>
          <IconEllipsis />
        </button>
      </div>
      
        <div className={`dropdown-menu ${isVisible ? "visible" : ""}`} ref={dropdownRef}>
          <button onClick={handleDeleteBoard} className="deleteButton">Delete Board</button>
          <button className="editButton">Edit Board</button>
        </div>
      
    </div>
  );
};

export default NewBoard;
