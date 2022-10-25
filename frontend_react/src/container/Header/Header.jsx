import React from 'react'
import { motion } from 'framer-motion'
import {useEffect, useState } from 'react'
import { Wrapper } from '../../hocs'
import { images } from '../../constants'

import './Header.css'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: .8,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  const headerRotation = ["Full-Stack", "Frontend", "Backend"]
  const [headerRotationIndex, setHeaderRotationIndex] = useState(0);
  const [headerText, setHeaderText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const period = 300;

  const typeHeader = () => {
    let i = headerRotationIndex % headerRotation.length;

    let fullText = headerRotation[i];
    let updatedHeaderText = isDeleting ? fullText.substring(0, headerText.length - 1) : fullText.substring(0, headerText.length + 1);

    setHeaderText(updatedHeaderText);

    // if(isDeleting) {
    //     setDelta(prevDelta => prevDelta /2)
    // }

    if(!isDeleting && updatedHeaderText === fullText) {
        setIsDeleting(true);
        setDelta(period);
    } else if(isDeleting && updatedHeaderText === ''){
        setIsDeleting(false);
        setHeaderRotationIndex(headerRotationIndex + 1)
        setDelta(150);
    }
  }

  useEffect(() => {
      let typewriter = setInterval(() => {
          typeHeader();
      }, delta);

      return () => { clearInterval(typewriter) };
  }, [headerText, delta, typeHeader]);
  
  return (
    <div className='app__header app__flex'>
      <motion.div className='app__header-info'
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='app__header-title'>Web Developer</h2>
        <h3 className='app__header-subtitle'>{`I build `}<span className='wrap'>{ headerText }</span>|
        {` applications`} <br /> {`both you and your clients will love`}</h3>
        <a className="link link-contact" href="#contact">Let's Connect!</a>
      </motion.div>

      <motion.div
        className='app__header-circles'
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
      >
        { [images.sass, images.javascript1, images.react].map((circle, index)=> (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Wrapper(Header, 'home')