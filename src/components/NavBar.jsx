import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav class="navbar bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:'white',fontSize:"40px"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/FISAT_LOGO.png" alt="Logo" width="150" height="70" class="d-inline-block align-text-top"/>
      Federal Institute of Science And Technology (FISAT)
    </a>
  </div>
</nav>
<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >
      <div class="navbar-nav" style={{color:"white"}}>
        <Link class="nav-link active" aria-current="page" to="/">Add Student</Link>
        <Link class="nav-link" to="/search">Search Students</Link>
        <Link class="nav-link" to="/view">View All</Link>
        
      </div>
    </div>
  </div>
</nav>
<br />
    </div>
  )
}

export default NavBar
