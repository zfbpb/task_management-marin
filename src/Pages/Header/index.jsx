import React from "react";
import "../Header/header.scss";
import kanbanLogoLight from "../../icons/logo-light.svg";
import boardImg from "../../icons/icon-board.svg";
import hideSidebar from "../../icons/icon-hide-sidebar.svg";

const Header = () => {
  const boardIcon = <img src={boardImg} alt="board icon" />;
  const hideSidebarIcon = <img src={hideSidebar} alt="hide icon" />;
  const kanbanLogoLightIcon = <img src={kanbanLogoLight} alt="kanban logo" />;
  return (
    <div className="headerContainer">
      <div className="headerContent">
        <h1>{kanbanLogoLightIcon}</h1>
        <p>ALL BOARDS</p>
        <button>{boardIcon}Platform Launch</button>
        <button>{boardIcon}Marketing Plan</button>
        <button>{boardIcon}Roadmap</button>
        <button>{boardIcon}+ Create New Board</button>
      </div>
      <div className="headerBottom">
        <div>Here switch</div>
        <button>{hideSidebarIcon}Hide Sidebar</button>
      </div>
    </div>
  );
};

export default Header;
