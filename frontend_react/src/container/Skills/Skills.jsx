import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { Wrapper, MotionWrap } from '../../hocs'
import { images } from '../../constants'
import './Skills.css'

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y:0, opacity: 1 })
  const [skills, setSkills] = useState([])
  const [filterSkills, setFilterSkills] = useState([])


  useEffect(() => {
    // query database for skills data
    const data = [
      {
        title: 'JavaScript',
        imgUrl: images.javascript,
        bgColor: "",
        category: ['Languages']
      },
      {
        title: 'Flask',
        imgUrl: images.flask,
        bgColor: "",
        category: ['Frameworks/Libraries']
      },
      {
        title: 'HTML/CSS',
        imgUrl: images.htmlcss,
        bgColor: "",
        category: ['Languages']
      },
      {
        title: 'C#',
        imgUrl: images.csharp,
        bgColor: "",
        category: ['Languages']
      },
      {
        title: 'Python',
        imgUrl: images.python,
        bgColor: "",
        category: ['Languages']
      },
      {
        title: 'Go',
        imgUrl: images.go,
        bgColor: "",
        category: ['Languages']
      },
      {
        title: 'React',
        imgUrl: images.react,
        bgColor: "",
        category: ['Frameworks/Libraries']
      },
      {
        title: 'Mongo.DB',
        imgUrl: images.mongo,
        bgColor: "",
        category: ['Databases']
      },
      {
        title: 'SCSS',
        imgUrl: images.sass,
        bgColor: "",
        category: ['Other']
      },
      {
        title: 'NodeJS',
        imgUrl: images.node,
        bgColor: "",
        category: ['Other']
      },
      {
        title: 'Framer Motion',
        imgUrl: images.framerMotion,
        bgColor: "",
        category: ['Frameworks/Libraries']
      },
      {
        title: 'Mongoose',
        imgUrl: images.mongoose,
        bgColor: "",
        category: ['Other']
      },
      {
        title: 'MySQL',
        imgUrl: images.MySQL,
        bgColor: "",
        category: ['Databases']
      },
      {
        title: 'SQLAlchemy',
        imgUrl: images.sqlAlchemy,
        bgColor: "",
        category: ['Other']
      },
      {
        title: 'Entity Framework',
        imgUrl: images.entityFramework,
        bgColor: "",
        category: ['Frameworks/Libraries']
      },
      {
        title: 'Vue.js',
        imgUrl: images.vue,
        bgColor: "",
        category: ['Frameworks/Libraries']
      },
      {
        title: 'Django',
        imgUrl: images.django,
        bgColor: "",
        category: ['Frameworks/Libraries']
      },
      {
        title: 'Express.js',
        imgUrl: images.express,
        bgColor: "",
        category: ['Frameworks/Libraries']
      },
      {
        title: 'Bootstrap',
        imgUrl: images.bootstrap,
        bgColor: "",
        category: ['Frameworks/Libraries']
      },
      {
        title: 'sanity',
        imgUrl: images.sanity,
        bgColor: "",
        category: ['Other']
      },
    ]

    setSkills(data)
    setFilterSkills(data)

  }, [] )

  const handleSkillsFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity: 0}])

    setTimeout(() => {
      setAnimateCard([ {y:0, opacity: 1}])

      if(item === 'All'){
        setFilterSkills(skills);
      } else {
        setFilterSkills(skills.filter((skill) => skill.category.includes(item)))
      }
    }, 500);
  }



  return (
    <>
      <h2 className='head-text'>My <span>Skills</span></h2>
      <div className='app__work-filter'>
        {
          ['Languages', 'Databases', 'Frameworks/Libraries', 'Other', 'All'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleSkillsFilter(item)}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : '' }`}
              style={{ border: '1px solid #e4e4e4'}}
            >
              {item}
            </div>
          ))
        }
      </div>

      <div className='app__skills-container'>
        <motion.div
          animate={animateCard}
          transition={{duration: 0.25, 
          delayChildren: 0.5}}
          className='app__skills-list'
        >
          {filterSkills.map((skill, index) => (
            <motion.div
            key={index}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
            >
              <div className='app__flex'>
                <img src={skill.imgUrl} alt={skill.title} />
              </div>
              <p className='p-text'>{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </>
  )
}

export default Wrapper(
  MotionWrap(Skills, 'app__skills'), 
  'skills',
  'app__whitebg'
  );