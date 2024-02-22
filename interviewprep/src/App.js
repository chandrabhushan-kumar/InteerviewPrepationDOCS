import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Personone from './Personone';
import Persontwo from './Persontwo';
// import UseRef from './UseRef';
// import UseMemo from './UseMemo'

function App() {
  
  return (
    <div className="App">
      <h1>Hello</h1>
      <Personone />
      <Persontwo />
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
    
    </div>
  );
}

export default App;
