import React from 'react';
import './App.css';
import Game from '../Game/Game';


const App: React.SFC = props =>  {
    return (
      <div className="App"> 
        <Game/>
      </div>
    );
}

export default App;
