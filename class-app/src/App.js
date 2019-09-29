import React, { useState } from 'react';

// Custom components
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import './App.css';


function App() {
  const [component, setComponent] = useState('signin');
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-btn" onClick={() => { setComponent('signin') }}>LOGIN</div>
        <div className="header-btn" onClick={() => { setComponent('signup') }}>SIGNUP</div>
      </header>
      <section>
        {component === 'signin' ? <Signin /> : <Signup />}
      </section>
    </div>
  );
}

export default App;
