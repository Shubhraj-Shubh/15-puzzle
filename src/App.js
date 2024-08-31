import './App.css';
import Navbar from './components/navbar'
import { useState,useEffect } from 'react';
// import NUMBER from './components/num'

function App() {
  function randomArr() {
    return new Array(16).fill().map((e, i) => i + 1).sort(() => (Math.random() - 0.5)).map((e, i) => ({
      value: e,
      index: i + 1
    }))
  }

  function swapping(i) {
    let t = 0;
    if ((num[i].index != 4 && num[i].index != 8 && num[i].index != 12 && num[i].index != 16) && (num[i + 1].value === 16)) {
      t = num[i].value
      num[i].value = num[i + 1].value
      num[i + 1].value = t
      setcount(count+1)
      console.log(count)
    }
    else if ((num[i].index != 1 && num[i].index != 5 && num[i].index != 9 && num[i].index != 13) && (num[i - 1].value === 16)) {
      t = num[i].value
      num[i].value = num[i - 1].value
      num[i - 1].value = t
      setcount(count+1)
      console.log(count)
    }
    else if ((num[i].index != 1 && num[i].index != 2 && num[i].index != 3 && num[i].index != 4) && (num[i - 4].value === 16)) {
      t = num[i].value
      num[i].value = num[i - 4].value
      num[i - 4].value = t
      setcount(count+1)
      console.log(count)
    }
    else  if ((num[i].index != 13 && num[i].index != 14 && num[i].index != 15 && num[i].index != 16) && (num[i + 4].value === 16)) {
      t = num[i].value
      num[i].value = num[i + 4].value
      num[i + 4].value = t
      setcount(count+1)
      console.log(count)
    }

    // console.log(i)
    // console.log("number"+num)
    // console.log("number"+num[i])
    // console.log("number"+num[i].value)
  }
  const [num, setnum] = useState(randomArr())
  const [count,setcount]= useState(0)
  useEffect(() => {

  }, [num])
  
  return (
    <div className="fullContainer">
     
      <div className="bigbox">
        <div className="boxpuzzle">
          <div className="heading">
            <h1>15 Puzzle</h1>
          </div>
          <div className="barbtn">
            <div  >
              <button type="button"  className='gradient-button' onClick={()=>{
                setnum(randomArr())
                setcount(0)
              }}>New Game</button>
            </div>

            <div className="displaybar">
              <div className="moves">Moves: {count}</div>
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
          
              {num.map((number, i) =>
                <div key={i} className={`numbercard box--${number.index} ${number.value===16?'transparentbox':''} ${number.value===number.index?'rightbox':''}`} onClick={() => {
                    swapping(i)
                  }} >
                {number.value}
                </div>
              )}

          </div>
        </div>
      </div>
      <div className="navbar">
        <Navbar />
      </div>
    </div>
    
  );
}

export default App;
