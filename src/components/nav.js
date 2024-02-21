import React from 'react'
import "../CSS/nav.css";
import {Link} from 'react-router-dom';

export default function nav() {
  return (
    <div className='line'>
    <div className='navbar1'>

      <div className='Link'>
        <Link to="/" className='li'>Home</Link>
        <Link to="/aboutUs"  className='li'>About</Link>
        <Link to="/project"  className='li'>Projects</Link>
        <Link to="/contactUs"  className='li'>Contact</Link>
      </div>
    </div>
    </div>
  )
}
