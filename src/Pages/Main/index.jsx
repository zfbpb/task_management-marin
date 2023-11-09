import React, { useContext } from "react";
import "../Main/main.scss";
import { ThemeContext } from "../../Theme";
import PlatformLaunch from "../../Components/PlatformLaunch";
import MarketingPlan from "../../Components/MarketingPlan";
import RoadMap from "../../Components/RoadMap";
import NewBoard from "../../Components/NewBoard";
import { Routes, Route, Navigate } from "react-router-dom";

//boards for keeping track of existing and a new boards
const Main = ({ boards, deleteBoard, setSelectedBoard }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`mainContainer ${theme} `}>
      <Routes>
        <Route path="/" element={<Navigate to="/platform-launch" />} />
        <Route path="/platform-launch" element={<PlatformLaunch />} />
        <Route path="/marketing-plan" element={<MarketingPlan />} />
        <Route path="/roadmap" element={<RoadMap />} />
        {/* <Route path="*" element={<PlatformLaunch />} /> {/* to handle no route matches location warning */} 
        {boards.map((board) => (
          <Route
            key={board.route}
            path={`/${board.route}`} // path={`/boards/:boardRoute`}
            element={
              <NewBoard
                data={board}
                deleteBoard={deleteBoard}
                setSelectedBoard={setSelectedBoard}
              />
            }
          />
        ))}
      </Routes>
    </div>
  );
};

export default Main;
