import React from "react";
import TypingSpeed from "./TypingSpeedGame/TypingSpeed";
import "./Typo.css";
const TypoMeter = () => {
  return (
    <div className="App dark:bg-gray-800 dark:border-gray-700">
      <TypingSpeed />
    </div>
  );
};

export default TypoMeter;
