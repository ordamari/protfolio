import React, { useEffect, useState } from 'react';
import Navbar from '../cmps/Navbar'
import Title from '../cmps/Title';
import About from '../cmps/About';
import Projects from '../cmps/Projects';
import Contact from '../cmps/Contact';
import useWindowDimensions from '../services/useWindowDimensions';

export default function Home(props) {

  const [elContainer, setElContainer] = useState(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [elPages, setElPages] = useState({ title: 0 });
  const [currDiv, setCurrDiv] = useState(0);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (elPages.title &&
      elPages.about &&
      elPages.projects &&
      elPages.contact &&
      elContainer) {
      if (scrollTop < elPages.about.offsetTop) setCurrDiv(0);
      else if (scrollTop < elPages.projects.offsetTop) setCurrDiv(1);
      else if (scrollTop < elPages.contact.offsetTop) setCurrDiv(2);
      else setCurrDiv(3)
    }
  }, [scrollTop])

  function scrollTo(divIdx){
    if(divIdx===0) elContainer.scrollTo(0,elPages.title.offsetTop);
    else if(divIdx===1) elContainer.scrollTo(0,elPages.about.offsetTop);
    else if(divIdx===2) elContainer.scrollTo(0,elPages.projects.offsetTop);
    else if(divIdx===3) elContainer.scrollTo(0,elPages.contact.offsetTop);
  }

  function checkIsInScreen(divIdx){
    const elPagesArr= Object.values(elPages);
    if(!elPagesArr[divIdx] || !elPagesArr[divIdx+1]) return false
    const startSee = elPagesArr[divIdx].offsetTop-height; 
    const endSee = elPagesArr[divIdx+1].offsetTop;
    return scrollTop>startSee && scrollTop<endSee; 
  }
  



  return (
    <div className='home' ref={(el) => setElContainer(el)} onScroll={() => { setScrollTop(elContainer.scrollTop) }} >
      <Navbar scrollTo={scrollTo} currDiv={currDiv} />
      <Title scrollTo={scrollTo} setElPages={setElPages} elPages={elPages} />
      <About setElPages={setElPages} elPages={elPages} checkIsInScreen={checkIsInScreen} />
      <Projects setElPages={setElPages} elPages={elPages} checkIsInScreen={checkIsInScreen} />
      <Contact scrollTo={scrollTo} setElPages={setElPages} elPages={elPages} />
     </div>
  )
}

