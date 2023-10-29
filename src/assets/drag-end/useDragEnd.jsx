import  { useState } from "react";


const useDragEnd = (initialData) => {
  const storedData = JSON.parse(localStorage.getItem("boardData") || "null")
  const [data, setData] = useState(storedData || initialData);

const onDragEnd = (result) => {
    const { source, destination } = result;

    // Ignore if the item is dropped outside a column or if there's no destination
    if (!destination) return;

    setData((prevData) => {
      const updatedBoards = [...prevData.boards];

      // Identify source and destination columns
      const sourceColumn = updatedBoards[0].columns.find(
        (column) => column.id.toString() === source.droppableId
      );
      const destinationColumn = updatedBoards[0].columns.find(
        (column) => column.id.toString() === destination.droppableId
      );

      if (sourceColumn && destinationColumn) {
        const [movedTask] = sourceColumn.tasks.splice(source.index, 1);
        destinationColumn.tasks.splice(destination.index, 0, movedTask);
      }

      const updatedData = { ...prevData, boards: updatedBoards };
      localStorage.setItem("boardData", JSON.stringify(updatedData))
      return updatedData

    });
  };
  return [data, onDragEnd]
}
  export default useDragEnd