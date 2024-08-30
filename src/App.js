import './App.css';
import Navbar from './components/navbar'
import { useState } from 'react';
import NUMBER from './components/num'

function App() {
  function randomArr(){
 return new Array(16).fill().map((e,i)=>i+1).sort(()=>(Math.random() - 0.5)).map((e,i)=>({
  value:e,
  index:i+1
}))
  }
const [num,setnum]=useState(randomArr())
  
  return (
    <div className="fullContainer">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="bigbox">
        <div className="boxpuzzle">
          <div className="heading">
            <h1>15 Puzzle</h1>
          </div>
          <div className="barbtn">
            <div className="newgamebtn">
              <button>New Game</button>
            </div>
            <div className="displaybar">
              <div className="time">Time</div>
              <div className="moves">Moves</div>
            </div>

          </div>
          <div className="puzzlecontainer">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
         {num.map((e,i) => 
              <NUMBER key={i} number={e} />
            ) }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
