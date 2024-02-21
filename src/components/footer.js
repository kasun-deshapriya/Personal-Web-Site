import React from 'react'
import '../CSS/footer.css';
import { Link } from 'react-router-dom';

function footer() {
  return (
    <div>
      <div className='line1'></div>
    <div className='footer'>

      <div className='Link1'>
        <Link to="/" className='li1'>Home</Link>
        <Link to="/aboutUs"  className='li1'>About</Link>
        <Link to="/project"  className='li1'>Projects</Link>
        <Link to="/contactUs"  className='li1'>Contact</Link>
      </div>
        <h2 className='name'>© 2024 Kasun.dev. All Rights Reserved.</h2>
    </div>
    </div>

    
  )
}

export default footer