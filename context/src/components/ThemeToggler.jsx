import React, { useContext } from "react";
import { DARK, LIGHT } from "../constants";
import ThemeContext from "./../context/ThemeContext";

const themeTogglerStyle = {
  cursor: "pointer",
  padding: 10,
};
const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  
  return (
    <div
      style={themeTogglerStyle}
      onClick={() => {
        setThemeMode(themeMode === LIGHT ? DARK : LIGHT);
      }}
    >
      <span title="switch theme">{themeMode === LIGHT ? "🌙" : "☀️"}</span>
    </div>
  );

};

export default ThemeToggler;
