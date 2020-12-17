import React from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import { LIGHT } from './constants';
import ThemeContext from './context/ThemeContext';

function App() {
  const themeHook = React.useState(LIGHT);
  return (
    <ThemeContext.Provider value={themeHook}>
      <div className="App">

        <Header />
        <Main />

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
