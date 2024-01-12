
import React, { useContext } from "react";
import "./card.scss";

import { ThemeContext } from "../../Theme";

export default function Card({ text }) {
  const { theme } = useContext(ThemeContext);

  return <div className={`task-title ${theme}`}>{text}</div>;
}
