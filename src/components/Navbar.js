import React from 'react'
import PropTypes from 'prop-types'
import { SketchPicker } from 'react-color'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
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