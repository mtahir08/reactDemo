import React, { useState } from 'react';

// Custom components
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import './App.css';


function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-btn" onClick={() => { setIsLogin(true) }}>LOGIN</div>
        <div className="header-btn" onClick={() => { setIsLogin(false) }}>SIGNUP</div>
      </header>
      <section>
        {isLogin ? <Signin /> : <Signup />}
      </section>
    </div>
  );
}

export default App;
