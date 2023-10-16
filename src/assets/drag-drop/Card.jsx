import { Draggable } from '@hello-pangea/dnd';
import React from 'react';
import './card.scss'

export default function Card({ text, index, id }) {
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
                  className='task-title'
              >
                  {text}
              </div>
          )}
      </Draggable>
  );
}
