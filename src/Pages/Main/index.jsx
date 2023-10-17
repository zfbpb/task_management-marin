import React, { useContext } from "react";
import "../Main/main.scss";
import { ThemeContext } from "../../Theme";
import PlatformLaunch from "../../Components/PlatformLaunch";
import MarketingPlan from "../../Components/MarketingPlan";
import RoadMap from "../../Components/RoadMap";
import { Routes, Route, Navigate } from "react-router-dom";

const Main = ({ hideHeader }) => {
  const { theme } = useContext(ThemeContext);
//${hideHeader ? "" : "shiftLeft"}
  return (
    <div className={`mainContainer ${theme} `}>
      <Routes>
        <Route path="/" element={<Navigate to="/platform-launch" />} />
        <Route path="/platform-launch" element={<PlatformLaunch />} />
        <Route path="/marketing-plan" element={<MarketingPlan />} />
        <Route path="/roadmap" element={<RoadMap />} />
      </Routes>
    </div>
  );
};

export default Main;
