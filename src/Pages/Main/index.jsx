import React, { useContext } from "react";
import "../Main/main.scss";
import { ThemeContext } from "../../Theme";
import PlatformLaunch from "../../Components/PlatformLaunch";
import MarketingPlan from "../../Components/MarketingPlan";
import RoadMap from "../../Components/RoadMap";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`mainContainer ${theme}`}>
      <Routes>
        <Route path="/platform-launch" element={<PlatformLaunch/>}  />
        <Route path="/marketing-plan" element={<MarketingPlan/>}  />
        <Route path="/roadmap" element={<RoadMap/>}  />
      </Routes>
    </div>
  );
};

export default Main;
