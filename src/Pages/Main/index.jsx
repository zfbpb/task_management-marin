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
const Main = ({ boards, deleteBoard, setSelectedBoard }) => {
  const { theme } = useContext(ThemeContext);
  //const [isEmptyColumn, setIsEmptyColumn] = useState({});

  const [data, setData] = useState(() => {
    const localStorageData = localStorage.getItem("boardData");
    return localStorageData ? JSON.parse(localStorageData) : initialData;
  });
  
  const onDragEnd = (result) => {
    const { source, destination } = result;


    // Ignore if the item is dropped outside a column or if there's no destination
    if (!destination) return;

    setData((prevData) => {
      const updatedBoards = [...prevData.boards];

      // Identify source and destination columns
      const sourceColumn = updatedBoards[0].columns?.find(
        (column) => column.id.toString() === source.droppableId
      );
      const destinationColumn = updatedBoards[0].columns?.find(
        (column) => column.id.toString() === destination.droppableId
      );

      if (sourceColumn && destinationColumn) {
        const [movedTask] = sourceColumn.tasks.splice(source.index, 1);
        destinationColumn.tasks.splice(destination.index, 0, movedTask);
      }

      // Update the isEmptyColumn state
      /* const isEmpty = updatedBoards[0].columns.reduce((acc, column) => {
        acc[column.id] = column.tasks.length === 0;
        return acc;
      }, {});

      setIsEmptyColumn(isEmpty); */

      return { ...prevData, boards: updatedBoards };
    });
  };
  useEffect(() => {
    localStorage.setItem("boardData", JSON.stringify(data));
  }, [data]);

  return (
    <div className={`mainContainer ${theme} `}>
      <Routes>
        <Route path="/" element={<Navigate to="/platform-launch" />} />
        <Route
          path="/platform-launch"
          element={<PlatformLaunch onDragEnd={onDragEnd} data={data} />}
        />
        <Route path="/marketing-plan" element={<MarketingPlan onDragEnd={onDragEnd} data={data}/> } />
        <Route path="/roadmap" element={<RoadMap onDragEnd={onDragEnd} data={data}/>} />
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

      {/* setCreateBoard={setCreateBoard} */}
      <BoardContainer onDragEnd={onDragEnd}  data={data}/>
    </div>
  );
};

export default Main;
