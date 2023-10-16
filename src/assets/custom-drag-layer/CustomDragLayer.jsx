import { useDragLayer } from "react-dnd";
import React from "react";
import { ItemTypes } from "../constants/Constants";

export function CustomDragLayer() {
    const { item, differenceFromInitialOffset } = useDragLayer((monitor) => ({
      item: monitor.getItem(),
      differenceFromInitialOffset: monitor.getDifferenceFromInitialOffset(),
    }));

    if (!item || item.type !== ItemTypes.CARD) return null;

    const style = {
      transform: `translate(${differenceFromInitialOffset.x}px, ${differenceFromInitialOffset.y}px)`,
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: 100,
      left: 0,
      top: 0,
      opacity: 1
    };

    return <div style={style}>{item.text}</div>;
}
