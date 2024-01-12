import React, { useContext } from "react";
import { ThemeContext } from "../../Theme";
import Card from "../../Assets/drag-drop/Card";
//import BoardContainer from "../BoardContainer/BoardContainer";

const PlatformLaunch = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  

/* console.log(data.columns[0].name);
console.log(data.columns[1].name);
console.log(data.columns[2].name);
const columnNames = data.columns.map((column) => column.name) */
console.log(data);
  return (
    <div className={`platform-container ${theme}`}>
      <div className="title">
        <h1></h1>
      </div>
      <div className="platform-wrapper-vertical">
        
        <div className="new-column">New Column +</div>
      </div>
    </div>
  );
};

export default PlatformLaunch;
