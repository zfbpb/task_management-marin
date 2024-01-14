import React, { useState } from "react";
import "./NewColumn.scss";

const NewColumn = () => {
  const [createColumn, setCreateColumn] = useState(true);
  const [description, setDescription] = useState("");

  const toggleCreateColumn = () => {
    setCreateColumn((prev) => !prev);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const sendDescription = () => {
    
    console.log(description);


    setDescription("");
  };

  return (
    <div className="new-column-container">
      <div className="new-column" onClick={toggleCreateColumn}>
        New Column +
      </div>
      {createColumn && (
        <div className="create-column">
          <button className="closeColumnBtn" onClick={toggleCreateColumn}>
            X
          </button>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            cols="30"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="submitColumnBtn"
            onClick={sendDescription}
          >
            submit
          </button>
        </div>
      )}
    </div>
  );
};

export default NewColumn;
