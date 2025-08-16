import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <p onClick={() => navigate("/digitalclock")}>Digital Clock</p>
          <p onClick={() => navigate("/stopwatch")}>Stop Watch</p>
        </div>
      </div>
    </>
  )
}

export default Navbar;