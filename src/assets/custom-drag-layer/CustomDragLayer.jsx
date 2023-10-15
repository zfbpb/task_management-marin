import { useDragLayer } from "react-dnd";
import React from "react";
import { ItemTypes } from "../constants/Constants";

export function CustomDragLayer() {
    const { item, initialOffset, currentOffset } = useDragLayer((monitor) => ({
      item: monitor.getItem(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
    }));

    if (!item || !initialOffset || !currentOffset || item.type !== ItemTypes.CARD) {
      return null;
    }

    const x = currentOffset.x;
    const y = currentOffset.y;

    const style = {
      transform: `translate(${x}px, ${y}px)`,
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: 100,
    };

    return <div style={style}>{item.text}</div>;
}
