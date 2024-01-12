import React, { useContext, useEffect, useState } from "react";
import "../Main/main.scss";
import { ThemeContext } from "../../Theme";
import PlatformLaunch from "../../Components/PlatformLaunch";
import MarketingPlan from "../../Components/MarketingPlan";
import RoadMap from "../../Components/RoadMap";
import NewBoard from "../../Components/NewBoard";
import { Routes, Route, Navigate } from "react-router-dom";
//import BoardContainer from "../../Components/BoardContainer/BoardContainer";
import initialData from "../../Assets/data/data.json";

//boards for keeping track of existing and a new boards
const Main = ({ boards, deleteBoard, setSelectedBoard }) => {
  const { theme } = useContext(ThemeContext);
 

  const [data, setData] = useState(() => {
    const localStorageData = localStorage.getItem("boardData");
    return localStorageData ? JSON.parse(localStorageData) : initialData;
  });
  
  
  useEffect(() => {
    localStorage.setItem("boardData", JSON.stringify(data));
  }, [data]);

//console.log(data.boards[1]);

  return (
    <div className={`mainContainer ${theme} `}>
      <Routes>
        <Route path="/" element={<Navigate to="/platform-launch" />} />
        <Route
          path="/platform-launch"
          element={<PlatformLaunch  data={data.boards[0]} />}
        />
        <Route path="/marketing-plan" element={<MarketingPlan  data={data.boards[1]}/> } />
        <Route path="/roadmap" element={<RoadMap  data={data.boards[2]}/>} />
        
        {boards.map((board) => (
          <Route
            key={board.route}
            path={`/${board.route}`} 
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
