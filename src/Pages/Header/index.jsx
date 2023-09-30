import React, { useContext, useState } from "react";
import "../Header/header.scss";
import "../../Assets/colors/colors.scss";

import kanbanLogoLight from "../../Icons/logo-light.svg";
import kanbanLogoDark from "../../Icons/logo-dark.svg";
import boardImg from "../../Icons/icon-board.svg";
import hideSidebar from "../../Icons/icon-hide-sidebar.svg";
import { ThemeContext } from "../../Theme";

const Header = () => {
  const [checkMode, setCheckMode] = useState(false);

  const boardIcon = <img src={boardImg} alt="board icon" />;
  const hideSidebarIcon = <img src={hideSidebar} alt="hide icon" />;
  const kanbanLogoLightIcon = <img src={kanbanLogoLight} alt="kanban logo" />;
  const kanbanLogoDarkIcon = (
    <img src={kanbanLogoDark} alt="kanban logo dark" />
  );
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
        <button>{boardIcon}+ Create New Board</button>
      </div>
      <div className="header__bottom">
        <div className="header-toggle-buttons">
          <button onClick={() => handleThemeToggle()}>{theme}</button>
        </div>
        <button>{hideSidebarIcon}Hide Sidebar</button>
      </div>
    </header>
  );
};

export default Header;
