import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isDOMComponent } from 'react-dom/test-utils';
import MenuIcon from '@material-ui/icons/Menu';

export default function Navbar({ currDiv, scrollTo }) {

  const [menuIsOpen,setMenuIsOpen]= useState(false);

  function toggleIsOpen(ev){
    ev.stopPropagation();
    setMenuIsOpen(prevState=>!prevState)
  }
  
  function onScrollTo(ev,divIdx){
    toggleIsOpen(ev);
    scrollTo(divIdx)
    
  }



  return (
    <div onClick={toggleIsOpen} className={`full black-screen ${menuIsOpen?'open':''}`}>
      <nav className='full'>
        <div className="main-container">
          <div className='flex justify-space-between align-center btns-container'>
            <button className={`logo ${currDiv === 0 ? 'curr' : ''}`} onClick={() => { scrollTo(0) }} >OR DAMARI</button>
            <button className="menu" onClick={toggleIsOpen} ><MenuIcon/></button>
            <div>
              <div className='flex align-center btns-container'>
                <button onClick={(ev) => { onScrollTo(ev,1) }} className={`${currDiv === 1 ? 'curr' : ''}`} >ABOUT</button>
                <button onClick={(ev) => { onScrollTo(ev,2) }} className={`${currDiv === 2 ? 'curr' : ''}`} >PROJECTS</button>
                <button onClick={(ev) => { onScrollTo(ev,3) }} className={`${currDiv === 3 ? 'curr' : ''}`} >CONTACT</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

