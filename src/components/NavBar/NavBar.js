import React from 'react'
import '../NavBar/NavBar.css'
import { RiSearchLine } from 'react-icons/ri'
function NavBar() {
  return (
    <div className='navBar'>
     
        <img className='logo' src="https://wallpaperaccess.com/full/6075689.png"
         alt="" />
         <div className="navheadings">
         <h3 className='navheading'>Homes</h3>
         <h3 className='navheading'>TV Shows</h3>
         <h3 className='navheading'>Movies</h3>
         </div>
     
<div className="second-sec">
  <RiSearchLine className='searchLogo'/>
  <h2>Kids</h2>
  <h2>DVD</h2>
</div>
         <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
         alt="" />
    </div>
  )
}

export default NavBar