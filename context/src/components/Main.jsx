import { useContext } from "react";
import ThemeContext from "./../context/ThemeContext";
import AppTheme from "./../Theme";

const Main = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  
  return (
    <main
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
      }}
    >
      <h1>Heading 1</h1>
      <p>This is a paragraph</p>
    </main>
  );
  
};

export default Main;
