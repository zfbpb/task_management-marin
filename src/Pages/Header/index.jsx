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
import { NavLink } from "react-router-dom";

const Header = ({
  toggleHeader,
  hideHeader,
  setCreateBoard,
  boards,
  boardNames,
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [checkMode, setCheckMode] = useState(theme === "dark-theme");

  const handleCreateBoardToggle = () => {
    setCreateBoard((prev) => !prev);
  };

  const boardIcon = <BoardImg />;
  const hideSidebarIcon = <HideSideBar />;

  const kanbanLogoLightIcon = (
    <img
      src={kanbanLogoLight}
      alt="kanban logo"
      className="kanban-logo-light"
    />
  );
  const kanbanLogoDarkIcon = (
    <img
      src={kanbanLogoDark}
      alt="kanban logo dark"
      className="kanban-logo-dark"
    />
  );

  const sunIcon = <img src={sun} alt="sun icon" className="sunIcon" />;
  const moonIcon = <img src={moon} alt="moon icon" className="moonIcon" />;

  const handleThemeToggle = () => {
    toggleTheme();
    setCheckMode((prev) => !prev);
  };

  const boardNamesLinks = boardNames.reduce((acc, board) => {
    acc[board] = `/${board.replace(/\s+/g, "-").toLowerCase()}`;
    return acc;
  }, {});

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
          <NavLink
            to={boardNamesLinks[board]}
            key={board}
            activeclassname="active"
          >
            <button className="board">
              {boardIcon}
              {board}
            </button>
          </NavLink>
        ))}
        {/* Dynamically created boards */}
        {boards.map((board) => (
          <NavLink
            to={`/${board.route}`}
            key={board.route}
            activeclassname="active"
          >
            <button className="board">
              {boardIcon}
              {board.name}
            </button>
          </NavLink>
        ))}
        <button className="create-board" onClick={handleCreateBoardToggle}>
          {boardIcon}+ Create New Board
        </button>
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
