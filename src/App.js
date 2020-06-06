import React from 'react';
import './App.css';
import Colors from "./Components/Colors";

function App() {
  return (
    <div className="App">
      <h1>Random Color Picker</h1>
      <p>Press Anywhere in the Circle to change for a Random Color!!</p>
      <Colors />
    </div>
  );
}

export default App;
