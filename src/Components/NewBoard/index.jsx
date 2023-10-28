import React, { useContext, useState } from "react";
import "./newboard.scss";
import { IconEllipsis } from "../../Assets/three-dots/IconEllipsis";
import { ThemeContext } from "../../Theme";

const NewBoard = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  const [isVisible, setIsVisible] = useState(false);
  const toggleMenu = () => {
    setIsVisible((prev) => !prev);
  };
console.log("data", data);
  const deleteBoard = () => {

  }
  return (
    <div className={`newboard-container ${theme}`}>
      <div className="title">
        <h1>{data?.name}</h1>
        <button className="three-dots-button" onClick={toggleMenu}>
          <IconEllipsis />
        </button>
      </div>
      
        <div className={`dropdown-menu ${isVisible ? "visible" : ""}`}>
          <button onClick={deleteBoard}>Delete Board</button>
          <button>Edit Board</button>
        </div>
      
    </div>
  );
};

export default NewBoard;
