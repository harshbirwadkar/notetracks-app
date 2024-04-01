import React, { useEffect } from 'react'
import { useLocation, Link ,useNavigate } from 'react-router-dom';

const Navbar = () => {
  let location = useLocation()
  let navigate = useNavigate()
  const handlelogout = ()=>{
    localStorage.clear('auth-token')
    navigate("/login")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand mx-4 mt-3 my-2"  to="/" style={{ fontSize: "37px" }}>NoteTracks</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto  mb-2 mb-lg-0 mx-3 mt-3 mb-2 " style={{ fontSize: "20px" }}>
              <li className="nav-item">
                <Link className={`nav-link mx-3 ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
              </li>
            </ul>
            {!localStorage.getItem('auth-token')?<form className="d-flex justify-content-center" role="search">
              <Link className="btn mx-1 rounded-pill" to="/login" role="button" style={{fontSize:"18px" , backgroundColor : "rgba(251, 108, 108, 1)"}}>Login</Link>
              <Link className="btn mx-1 rounded-pill" to="/signup" role="button" style={{fontSize:"18px" , backgroundColor : "rgba(126, 188, 245, 1)"}}>Signup</Link>
            </form> :<Link onClick={handlelogout} className="btn mx-1 rounded-pill" to="/login" role="button" style={{fontSize:"18px" , backgroundColor : "rgba(251, 108, 108, 1)"}}>Logout</Link> }
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar