import { useEffect, useState } from 'react'
import './App.css'


function Clock() {
const [time,settime] = useState(new Date());

  useEffect(()=>{
    let interval = setInterval(()=>{
    settime(new Date());

  },1000);
  return () =>clearInterval(interval);
  },[])

  function formatTime(date) {
    let hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const meridem = date.getHours() >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    return `${hours}:${minutes}:${seconds} ${meridem}`;
  }

    function getDate(date){
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();

      return `${day}/${month}/${year}`
    }


  return (
    <>
      <div className="clock-container">
        <div className="clock-wrapper">
          <h1 style={{ fontSize: '2em' }}>Digital Clock</h1>
          <div className="timer">
            <span>{formatTime(time)}</span>
            <span>{getDate(time)}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Clock;