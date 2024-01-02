import { Draggable } from '@hello-pangea/dnd';
import React, { useContext } from 'react';
import './card.scss';

import { ThemeContext } from '../../Theme';

export default function Card({ text, index, id, boardIndex }) {
  const { theme } = useContext(ThemeContext);

  // Generate a unique ID if 'id' is undefined
  const draggableId = id || `generated-id-${index}`;

  return (
    <Draggable draggableId={`item-${draggableId}`} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
          }}
          className={`task-title ${theme}`}
        >
          {text}
        </div>
      )}
    </Draggable>
  );
}
