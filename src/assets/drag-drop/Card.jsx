import { Draggable } from '@hello-pangea/dnd';
import React, { useContext } from 'react';
import './card.scss'

import { ThemeContext } from "../../Theme";
export default function Card({ text, index, id }) {
  const { theme} = useContext(ThemeContext);

  return (
    <Draggable draggableId={`item-${id}`} index={index}>
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
