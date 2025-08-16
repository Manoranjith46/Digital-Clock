import Clock from './clock'
import Stopwatch from './Stopwatch'
import { Routes, Route } from 'react-router-dom'

function App() {

  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
      e.preventDefault();
    }
  });

  return (
    <Routes>
      <Route path="/" element={<Clock />} />
      <Route path="/digitalclock" element={<Clock />} />
      <Route path="/stopwatch" element={<Stopwatch />} />
    </Routes>
  )
}

export default App