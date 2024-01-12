import React, { useContext } from "react";
import BoardContainer from "../BoardContainer/BoardContainer";
import { ThemeContext } from "../../Theme";

const MarketingPlan = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`marketing-container ${theme}`}>
      <div className="title">
        <h1>{data?.boards?.[1].name}</h1>
      </div>
      <div className="platform-wrapper-vertical">
       
          <div className="new-column">New Column +</div>
        
      </div>
    </div>
  );
};

export default MarketingPlan;
