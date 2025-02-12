import React, { useState, useEffect } from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { div } from 'three/examples/jsm/nodes/Nodes.js'


const Tech = () => {

  const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
  
      const mediaQuery = window.matchMedia("(max-width: 500px)");
  
      setIsMobile(mediaQuery.matches);
  
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
  
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>I work on these -</p>
          <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>  
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            {!isMobile ? (
              <BallCanvas icon={technology.icon} />
            ) : (
              <div className='flex justify-center items-center w-18 h-18 bg-white-100 rounded-full'>
                <img src={technology.icon} alt={technology.name} className='w-full h-full p-2' />
              </div>
            )}
          </div>
          ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "")