import React from "react";
import "./layout.scss";
import Header from "../Header";
import Main from "../Main";
const Layout = () => {
  return (
    <div className="layoutContainer">
      <Header />
      <Main />
    </div>
  );
};

export default Layout;
