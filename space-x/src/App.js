import React from 'react';
import './App.css';
import Filter from './Components/Filter';
import LaunchData from './Components/LaunchData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          SpaceX Launch Programs
        </p>
      </header>

      <main className="App-main">
        {<Filter/>}
        {<LaunchData/>}
      </main>


      <footer className="App-footer">
        Developed By: Kunark Khewal
      </footer>
    </div>
  );
}

export default App;
