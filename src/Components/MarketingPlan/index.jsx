// MarketingPlan.js
import React from "react";
import BoardContainer from "../BoardContainer/BoardContainer";
import "./marketing.scss";

const MarketingPlan = ({ data, onDragEnd }) => {
  return (
    <div className="marketing-container">
      <div className="title">
        <h1>{data?.boards?.[1].name}</h1>
      </div>
      <div className="platform-wrapper-vertical">
        <div className="platform-wrapper-horizontal">
          <BoardContainer data={data} boardIndex={1} onDragEnd={onDragEnd} />
        </div>
      </div>
    </div>
  );
};

export default MarketingPlan;
