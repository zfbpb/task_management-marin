import React from "react";
import initialData from "../../Assets/data/data.json";
import "./marketing.scss"
const MarketingPlan = () => {
  const data = initialData;
  return (
    <div className="marketing-container">
      <div className="title">
        <h1>{data.boards?.[1].name}</h1>
      </div>
      <div className="empty"></div>
    </div>
  );
};

export default MarketingPlan;
