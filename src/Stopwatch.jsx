import { useRef, useState } from 'react'

function Stopwatch() {

  const [timer,settimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  let intervalId = useRef(null);

  const startTimer = () => {
    intervalId.current = setInterval(() => {
      setIsActive(true);
      settimer(prevTime => prevTime + 10);
    }, 10);
  };

  const stopTimer = ()=>{
    clearInterval(intervalId.current);
    setIsActive(false);
  }
  
  const resetTimer = ()=>{
    clearInterval(intervalId.current);
    settimer(0);
    setIsActive(false);
  }

  const FormatTimer = (time)=>{
    let hours = Math.floor((time / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
    let minutes = Math.floor((time / (1000 * 60)) % 60).toString().padStart(2, '0');
    let seconds = Math.floor((time / 1000) % 60).toString().padStart(2, '0');
    let milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  return (
  <>
    <div className="clock-container">
      <div className="clock-wrapper">
        <h1 style={{ fontSize: '2em' }}>Stop Watch</h1>
        <div className="timer">
          <span>{FormatTimer(timer)}</span>
          <div className="btns ">
            {isActive ? (<button className="btn btn-primary mx-2" onClick={stopTimer}>Stop</button>)
              :
              (<button className="btn btn-primary mx-2" onClick={startTimer}>Start</button>)}
            <button className="btn btn-secondary mx-2" onClick={resetTimer}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  </>
    )
}

export default Stopwatch;