import React, { useState } from "react";
import "./NewColumn.scss";

const NewColumn = ({ addNewColumn }) => {
  const [createColumn, setCreateColumn] = useState(true);
  const [description, setDescription] = useState("");

  const toggleCreateColumn = () => {
    setCreateColumn((prev) => !prev);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const submitDescription = () => {
    if (description.trim() !== "") {
      addNewColumn(description);
      setDescription("");
      toggleCreateColumn();
    }
  };

  return (
    <div className="new-column-container">
      <div className="new-column" onClick={toggleCreateColumn}>
        New Column +
      </div>
      {createColumn && (
        <div className="create-column">
          <div className="column-name-wrapper">
            <p>New Column</p>
            <button className="closeColumnBtn" onClick={toggleCreateColumn}>
              X
            </button>
          </div>
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
            onClick={submitDescription}
          >
            submit
          </button>
        </div>
      )}
    </div>
  );
};

export default NewColumn;
