import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { Wrapper, MotionWrap } from '../../hocs'
import { images } from '../../constants'

import './About.css'

const abouts = [
  {title: 'Full-Stack', description: 'I build fullstack apps with C#, MERN, and Python', imgUrl: images.uiux},
  {title: 'Frontend', description: 'I design dynamic yet easy-to-use client experiences', imgUrl: images.softwareDevelopment1},
  {title: 'Backend', description: 'I formulate cohesive and efficient server-side applications', imgUrl: images.softwareDevelopment2},
  // {title: 'UI/UX', description: 'Clean and intuitive user interfaces', imgUrl: images.uiux},
  // {title: 'Game Development', description: 'I develop fun and creative game-based projects', imgUrl: images.gameDevelopment},
];

const About = () => {
  return (
    <>
      <h2 className='head-text head-text--center'>
        Where <span>creative</span> problem solving<br />
        and <span>intuitive</span> design meet
      </h2>

      <div className='app__profiles'>
        {abouts.map((about, index)=> (
          <motion.div
            className='app__profile-item'
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween'}}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default Wrapper(
  MotionWrap(About, 'app__about'), 
  'about',
  'app__whitebg'
  );