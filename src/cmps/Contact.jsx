import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaAngleDoubleUp, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';



export default function Contact({setElPages,elPages,scrollTo}) {


  function sendEmail(ev) {
    ev.preventDefault();

    emailjs.sendForm('service_hzg7rtq', 'template_3oj5616', ev.target, 'user_t3sILunKkOT4gaPKY4ATv')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    ev.target.reset();
  }

  return (
    <div ref={(el) => { if (el && !elPages.contact) setElPages(prevState => ({ ...prevState, contact: el })) }} className='main-container contact'>
      <div className="h2-container">
        <h2>CONTACT</h2>
      </div>
      <div className="form-container">
        <p>Have a question or want to work together?</p>
        <form onSubmit={sendEmail} className="flex column align-start">
          <input placeholder="Name" type="text" name="name" />
          <input placeholder="Your email" type="email" name="email" />
          <textarea placeholder="Message" name="message" rows="6"></textarea>
          <button>SUBMIT</button>
        </form>
      </div>
      <div className="social-container full flex column align-center">
        <button onClick={()=>{scrollTo(0)}} className="go-up"><FaAngleDoubleUp/></button>
        <div className="social">
          <a href="https://www.linkedin.com/in/or-damari-8534561b3/"><FaLinkedinIn /></a>
          <a href="https://github.com/ordamari"><FiGithub /></a>
          <a href="https://wa.me/972503990939"><FaWhatsapp /></a>
          <a href="https://www.facebook.com/or.damari.1/"><FaFacebookF /></a>
        </div>
        <p>Or Damari</p>
      </div>

    </div>
  )
}

