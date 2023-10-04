import React, { useContext, useState } from "react";
import "./layout.scss";
import Header from "../Header";
import Main from "../Main";
import { ThemeContext } from "../../Theme";
import showIcon from "../../Icons/icon-show-sidebar.svg"

const Layout = () => {
  const {theme} = useContext(ThemeContext)
  
  const [hideHeader, setHideHeader] = useState(true);
  const [showButton, setShowButton] = useState(false);

  const toggleHeader = () => {
    setHideHeader((prev) => !prev);
    setShowButton((prev) => !prev);
  };
const showHeaderIcon = <img src={showIcon} alt="eye icon" />
  return (
    <div className={`layoutContainer ${theme}`}>
      <Header toggleHeader={toggleHeader} hideHeader={hideHeader}/>
      {showButton && (
        <button className="toggleHeader" onClick={toggleHeader}>
         {showHeaderIcon}
        </button>
      )}
      <Main />
    </div>
  );
};

export default Layout;
