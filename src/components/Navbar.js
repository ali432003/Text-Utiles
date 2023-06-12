import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {


  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}id='nav'>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">{props.aboutText}</Link>
            </li>
          </ul> 
          <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input class="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
              <label class={`form-check-label text-${props.mode==='light'?'dark':'light'}`} for="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.protoTypes = {
  title: PropTypes.string,   //for declaring dtypes of properties for incase you initializi title with number it shows error in the console of browser
  aboutText: PropTypes.string
}
Navbar.defaultProps = {
  title: 'default prop title',     // for declaring default props like if no title and about value is passed then these values is printed on the screen
  aboutText: 'default prop about'
}