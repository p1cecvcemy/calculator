import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'tailwindcss/tailwind.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Привет мир</h1>
        <div className="flex justify-center items-center">
          <button className="bg-blue-500 px-4 py-2 rounded">Click Me</button>
        </div>
      </header>
    </div>
  );
}

export default App;
