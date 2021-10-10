import React, { useEffect, useState } from 'react';
import { IoSpeedometerOutline } from 'react-icons/all';
import { MdDevices } from 'react-icons/all';
import { IoBulbOutline } from 'react-icons/all';
import { IoRocketOutline } from 'react-icons/all';
import me from '../assets/imgs/me.jpg'
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';


export default function About({setElPages,elPages,checkIsInScreen}) {

  const [isEffectHappend,setIsEffectHappend]= useState(false);

  function setEffect(){
    if(checkIsInScreen(1)){
      setIsEffectHappend(true);
      return true
    }
    else return false;
  }

  return (
    <div 
    ref={(el) => { if (el && !elPages.about) setElPages(prevState => ({ ...prevState, about: el })) }} 
    className="main grey">

      <div className={`main-container about ${(isEffectHappend || setEffect())? 'effect':''}`}>
        <div className="h2-container">
          <h2>ABOUT</h2>
        </div>
        <div className="benefits-container">
          <div className="benefit">
            <div className='icon-container'>
              <IoSpeedometerOutline />
            </div>
            <h3>Fast</h3>
            <p>Fast load times and lag free interaction, my highest priority.</p>
          </div>
          <div className="benefit">
            <div className='icon-container'>
              <MdDevices />
            </div>
            <h3>Response</h3>
            <p>My layouts will work on any device, big or small.</p>
          </div>
          <div className="benefit">
            <div className='icon-container'>
              <IoBulbOutline />
            </div>
            <h3>Intuitive</h3>
            <p>Strong preference for easy to use, intuitive UX/UI.</p>
          </div>
          <div className="benefit">
            <div className='icon-container'>
              <IoRocketOutline />
            </div>
            <h3>Dynamic</h3>
            <p>Websites don't have to be static, I love making pages come to life.</p>
          </div>
        </div>
        <div className="on-me">
          <h3>Or Damari</h3>
          <div>
            <p>
              I am Full-Stack / Frontend  Web Developer with knowledge and experience writing Single Page Applications, using the latest web technologies such as Node.js, Vue.js, Angular, React.js and React Redux.
          </p>
            <p>
              A team player, hard worker, focusing on problem solving and detailed orientation. Self-learner, responsible, and adapt quickly to new environments.
          </p>
          </div>
          <a className="download" href="">Download my CV <SystemUpdateAltIcon/></a>
        </div>
      </div>
    </div>
  )
}

