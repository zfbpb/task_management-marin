import React, { useContext, useEffect} from "react";
import "./newboard.scss";

import { ThemeContext } from "../../Theme";


const NewBoard = ({ data, setSelectedBoard }) => {

  
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setSelectedBoard(data); // Setting selected board

    // Cleanup function to clear the selected board 
    return () => {
      setSelectedBoard(null);
    };
  }, [data, setSelectedBoard]);


  return (
    <div className={`newboard-container ${theme}`}>
      <div className="title">
        <h1>{data?.name}</h1>
     
        </div>
      
    </div>
  );
};

export default NewBoard;
