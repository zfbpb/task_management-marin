import React, { useState } from "react";
import "./layout.scss";
import Header from "../Header";
import Main from "../Main";

const Layout = () => {
  const [hideHeader, setHideHeader] = useState(true);
  const [showButton, setShowButton] = useState(false);

  const toggleHeader = () => {
    setHideHeader((prev) => !prev);
    setShowButton((prev) => !prev);
  };

  return (
    <div className="layoutContainer">
      <Header toggleHeader={toggleHeader} hideHeader={hideHeader}/>
      {showButton && (
        <button className="toggleHeader" onClick={toggleHeader}>
          toggleHeader
        </button>
      )}
      <Main />
    </div>
  );
};

export default Layout;
