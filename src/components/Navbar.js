import React from 'react';
import logo from '../assets/images/logoimage.png';
console.log(logo);

function Navbar() {
  return (
    <>
     <div className='navbar'>
        <div className='navbar-container container'></div>
        <link to='/' className='navbar-logo'>
            <img src={logo} alt='logo'/>
        </link>
     </div>
    </>
  )
}

export default Navbar