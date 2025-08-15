import './App.css'

function App() {



  return (
    <>
      <div className="clock-container">
        <div className="clock-wrapper">
          <h1 style={{ fontSize: '2em' }}>Digital Clock</h1>
          <div className="timer">
            <span className="hour">00</span>:
            <span className="minute">00</span>:
            <span className="second">00</span>
          </div>  
        </div>        
      </div>
    </>
  )
}

export default App
