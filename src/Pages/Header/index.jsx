import React, { useContext, useState } from "react";
import "../Header/header.scss";
import "../../Assets/colors/colors.scss";

import kanbanLogoLight from "../../Icons/logo-light.svg";
import kanbanLogoDark from "../../Icons/logo-dark.svg";
import boardImg from "../../Icons/icon-board.svg";
import hideSidebar from "../../Icons/icon-hide-sidebar.svg";
import sun from "../../Icons/sun.png";
import moon from "../../Icons/half-moon.png";

import { ThemeContext } from "../../Theme";

const Header = () => {
  const [checkMode, setCheckMode] = useState(false);

  const boardIcon = <img src={boardImg} alt="board icon" />;
  const hideSidebarIcon = <img src={hideSidebar} alt="hide icon" />;
  const kanbanLogoLightIcon = <img src={kanbanLogoLight} alt="kanban logo" />;
  const kanbanLogoDarkIcon = (
    <img src={kanbanLogoDark} alt="kanban logo dark" />
  );

  const sunIcon = <img src={sun} alt="sun icon" className="sunIcon" />;
  const moonIcon = <img src={moon} alt="moon icon" className="moonIcon" />;

  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    toggleTheme();
    setCheckMode((prev) => !prev);
  };
  return (
    <header className={`header ${theme}`}>
      <div className="header__content">
        {checkMode ? (
          <h1>{kanbanLogoDarkIcon}</h1>
        ) : (
          <h1>{kanbanLogoLightIcon}</h1>
        )}

        <p>ALL BOARDS</p>
        <button className="board">{boardIcon}Platform Launch</button>
        <button className="board">{boardIcon}Marketing Plan</button>
        <button className="board">{boardIcon}Roadmap</button>
        <button className="create-board">{boardIcon}+ Create New Board</button>
      </div>
      <div className="header__bottom">
        <div className="theme-toggle-wrapper">
          <button onClick={handleThemeToggle} className="themeToggleBtn">
            <span className="sunSpan">{sunIcon}</span>
            <span className="moonSpan">{moonIcon}</span>
          </button>
        </div>
        <button className="hideSidebarBtn">
          {hideSidebarIcon}Hide Sidebar
        </button>
      </div>
    </header>
  );
};

export default Header;
