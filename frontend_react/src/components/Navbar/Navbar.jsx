import React from 'react'
import { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import './Navbar.css'
import { images } from '../../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h1>
          Cayla 
          <span>
            Bradley
          </span>
          .dev
        </h1>
      </div>
      <ul className='app__navbar-links'>
        { ['home', 'about', 'work', 'skills', 'contact'].map( (item) => (
          item === "contact" ?
          <li className='app__flex p-text' key={`link-${item}`}>
            <a className="link link-contact" href={`#${item}`}>contact</a>
          </li> :
          <li className='app__flex p-text' key={`link-${item}`}>
            <a className="link link-default" href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)}/>

          {
            toggle && (
              <motion.div
                whileInView= {{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeOut'}}
              >
                <HiX onClick={() => setToggle(false)}/>
                <ul>
                  { ['home', 'about', 'work', 'skills', 'contact'].map( (item) => (
                    item === "contact" ?
                    <li className='app__flex p-text' key={`link-${item}`}>
                      <a className="link link-contact" href={`#${item}`} onClick={() => setToggle(false)}>contact</a>
                    </li> :
                    <li className='app__flex p-text' key={item}>
                      <a className="link link-default" href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar