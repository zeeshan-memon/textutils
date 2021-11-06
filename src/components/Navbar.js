import React from 'react'
import PropTypes from 'prop-types'
import { SketchPicker } from 'react-color'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" style={{height:"30px", width:"30px", cursor:"pointer"}}></div>
          </div>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode=== "light"?"Enable DarkMood":"Disable DarkMood"}</label>
        </div>
        {/* <button type="button" className="btn btn-dark btn-sm"  onClick={props.showColorPicker} style={{backgroundColor :props.color}}>Change Color</button>
        {props.colorPicker && <SketchPicker color={props.color} onChange={updateColor => props.setColorPickerColor(updateColor.hex)}/>} */}
          </div>
      </nav>
    )
}

Navbar.propTypes = {
title: PropTypes.string.isRequired,
searchBar: PropTypes.bool.isRequired
}

Navbar.defaultProps = {
title:'TextUtils',
searchBar:true,
color: '#1E6738'
}