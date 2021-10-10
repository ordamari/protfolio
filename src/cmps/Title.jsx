import React, { useEffect, useState } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export default function Title({setElPages,elPages,scrollTo}) {



  return (
    <div ref={(el) => { if (el && !elPages.title) setElPages(prevState => ({ ...prevState, title: el })) }} className='full title'>
      <div className="main-container">
        <div className="flex column align-center justify-center text-container">
          <p>Hello, I'm <span>Or Damari</span>.</p>
          <p>I'm a full-stack web developer.</p>
          <button onClick={()=>{scrollTo(1)}} className="flex align-center justify-center">
            View my work <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

