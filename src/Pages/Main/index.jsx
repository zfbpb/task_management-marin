import React, { useContext, useEffect, useState } from "react";
import "../Main/main.scss";
import { ThemeContext } from "../../Theme";
import PlatformLaunch from "../../Components/PlatformLaunch";
import MarketingPlan from "../../Components/MarketingPlan";
import RoadMap from "../../Components/RoadMap";
import NewBoard from "../../Components/NewBoard";
import { Routes, Route, Navigate } from "react-router-dom";
import BoardContainer from "../../Components/BoardContainer/BoardContainer";
import initialData from "../../Assets/data/data.json";

//boards for keeping track of existing and a new boards
const Main = ({ boards }) => {
  const { theme } = useContext(ThemeContext);
  //const [isEmptyColumn, setIsEmptyColumn] = useState({});

  const [data, setData] = useState(() => {
    const localStorageData = localStorage.getItem("boardData");
    return localStorageData ? JSON.parse(localStorageData) : initialData;
  });

  const onDragEnd = (result, boardIndex) => {
    const { source, destination } = result;
    // Ignore if the item is dropped outside a column or if there's no destination
    if (!destination) return;

    setData((prevData) => {
      const updatedBoards = [...prevData?.boards];

      // Identify source and destination columns
      const sourceColumn = updatedBoards[boardIndex]?.columns?.find(
        (column) => column?.id?.toString() === source.droppableId
      );
      const destinationColumn = updatedBoards[boardIndex]?.columns?.find(
        (column) => column?.id?.toString() === destination.droppableId
      );

      if (sourceColumn && destinationColumn) {
        const [movedTask] = sourceColumn.tasks.splice(source?.index, 1);
        destinationColumn.tasks.splice(destination.index, 0, movedTask);
      }

      return { ...prevData, boards: updatedBoards };
    });
  };
  useEffect(() => {
    localStorage.setItem("boardData", JSON.stringify(data));
  }, [data]);
  //Split function usage based on boardIndex - undefined columns fix
  const updateDataInMain = (updatedData, boardIndex) => {
    setData((prevData) => {
      const updatedBoards = [...prevData?.boards];
      updatedBoards[boardIndex] = {
        ...updatedBoards[boardIndex],
        ...updatedData,
      };
      return { ...prevData, boards: updatedBoards };
    });
  };
//console.log("boards",boards);
  return (
    <div className={`mainContainer ${theme} `}>
      <Routes>
        <Route path="/" element={<Navigate to="/platform-launch" />} />
        <Route
          path="/platform-launch"
          element={
            <PlatformLaunch
              onDragEnd={onDragEnd}
              data={data}
              updateDataInMain={updateDataInMain}
            />
          }
        />
        <Route
          path="/marketing-plan"
          element={
            <MarketingPlan
              onDragEnd={onDragEnd}
              data={data}
              updateDataInMain={updateDataInMain}
            />
          }
        />
        <Route
          path="/roadmap"
          element={
            <RoadMap
              onDragEnd={onDragEnd}
              data={data}
              updateDataInMain={updateDataInMain}
            />
          }
        />
        {boards.map((board, boardIndex) => (
          <Route
            key={board.route}
            path={`/${board.route}`}
            data={data}
            element={
              <NewBoard  
                board={board}
                boardIndex={boardIndex}
                onDragEnd={onDragEnd}        
              />
            }
          />
        ))}
      </Routes>
      <BoardContainer onDragEnd={onDragEnd} data={data}/>
    </div>
  );
};

export default Main;
