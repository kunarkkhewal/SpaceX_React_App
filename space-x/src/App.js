import React, {useState} from 'react';
import './App.css';
import Filter from './Components/Filter';
import LaunchData from './Components/LaunchData';

export const DataContext = React.createContext();

function App() {
  const [missionData, setMissionData] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          SpaceX Launch Programs
        </p>
      </header>

      <main className="App-main">
        <DataContext.Provider value={{missionData,setMissionData}}>
          {<Filter/>}
          {<LaunchData/>}
        </DataContext.Provider>
      </main>


      <footer className="App-footer">
        Developed By: Kunark Khewal
      </footer>
    </div>
  );
}

export default App;
