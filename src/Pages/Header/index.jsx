import React, { useContext, useState } from "react";
import "../Header/header.scss";
import "../../Assets/colors/colors.scss";

import kanbanLogoLight from "../../Icons/logo-light.svg";
import kanbanLogoDark from "../../Icons/logo-dark.svg";
import sun from "../../Icons/sun.png";
import moon from "../../Icons/half-moon.png";

import { ThemeContext } from "../../Theme";

import { BoardImg } from "../../Icons/BoardIcon";
import { HideSideBar } from "../../Icons/HideSideBar";

const Header = ({ toggleHeader, hideHeader }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [checkMode, setCheckMode] = useState(theme === "dark-theme");
  const [isActive, setIsActive] = useState(null);

  const boardIcon = <BoardImg />;
  const hideSidebarIcon = <HideSideBar />;

  const kanbanLogoLightIcon = <img src={kanbanLogoLight} alt="kanban logo" />;
  const kanbanLogoDarkIcon = (
    <img src={kanbanLogoDark} alt="kanban logo dark" />
  );

  const sunIcon = <img src={sun} alt="sun icon" className="sunIcon" />;
  const moonIcon = <img src={moon} alt="moon icon" className="moonIcon" />;

  const handleThemeToggle = () => {
    toggleTheme();
    setCheckMode((prev) => !prev);
  };

  const boardNames = ["Platform Launch", "Marketing Plan", "Roadmap"];

  return (
    <header className={`header ${theme} ${hideHeader ? "" : "hidden"}`}>
      <div className="header__content">
        {checkMode ? (
          <h1>{kanbanLogoLightIcon}</h1>
        ) : (
          <h1>{kanbanLogoDarkIcon}</h1>
        )}
        <p>ALL BOARDS</p>

        {boardNames.map((board) => (
          <button
            className={`board ${
              isActive === board ? "active" : ""
            }`}
            onClick={() => setIsActive(board)}
          >
            {boardIcon}{board}
          </button>
        ))}

        <button className="create-board">{boardIcon}+ Create New Board</button>
      </div>
      <div className="header__bottom">
        <div className="theme-toggle-wrapper">
          <button onClick={handleThemeToggle} className="themeToggleBtn">
            <span className="sunSpan">{sunIcon}</span>
            <span className="moonSpan">{moonIcon}</span>
          </button>
        </div>
        <button className="hideSidebarBtn" onClick={toggleHeader}>
          {hideSidebarIcon}Hide Sidebar
        </button>
      </div>
    </header>
  );
};

export default Header;
