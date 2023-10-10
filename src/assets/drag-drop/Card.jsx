import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../constants/Constants';

export default function Card({ id, text, moveCard }) {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.id;
      const hoverIndex = id;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.id = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: { id, text },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div ref={ref} className='task-title' style={{ opacity: isDragging ? 0.5 : 1 }}>
      {text}
    </div>
  );
}
