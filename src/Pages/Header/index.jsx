import React, { useContext } from "react";
import "../Header/header.scss";
import kanbanLogoLight from "../../icons/logo-light.svg" // ovo je popravljeno i radi
import boardImg from "../../icons/icon-board.svg"; // ovo ne radi
import hideSidebar from "../../icons/icon-hide-sidebar.svg";
import { ThemeContext } from "../../Theme";

const Header = () => {
  const boardIcon = <img src={boardImg} alt="board icon" />;
  const hideSidebarIcon = <img src={hideSidebar} alt="hide icon" />;
  const kanbanLogoLightIcon = <img src={kanbanLogoLight} alt="kanban logo" />;

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="header__content">
        <h1>{kanbanLogoLightIcon}</h1>
        <p>ALL BOARDS</p>
        <button className="board">{boardIcon}Platform Launch</button>
        <button className="board">{boardIcon}Marketing Plan</button>
        <button className="board">{boardIcon}Roadmap</button>
        <button>{boardIcon}+ Create New Board</button>
      </div>
      <div className="header__bottom">
        <div className="header-toggle-buttons">
          <button onClick={() => toggleTheme()}>{theme}</button>
        </div>
        <button>{hideSidebarIcon}Hide Sidebar</button>
      </div>
    </header>
  );
};

export default Header;
