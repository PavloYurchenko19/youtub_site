import React, { FC, useState } from 'react'
// src
import styles from './Contents.module.scss'
import { Headings } from './Headings'
import { useHeadingsData, useIntersectionObserver } from '../../Helper'
import { motion } from 'framer-motion'
const Contents: FC = () => {
  const [activeId, setActiveId] = useState()
  useIntersectionObserver(setActiveId)
  const { nestedHeadings } = useHeadingsData()

  return (
        <motion.nav className={styles['nav__content']} aria-label="Table of contents"
                    initial={{
                      opacity: 0
                    }}
           whileInView={{
             opacity: 1,
             boxShadow: '0 0 10px black',
             transition: {
               duration: 1
             }
           }}

        >
            <Headings headings={nestedHeadings} activeId={activeId}/>
        </motion.nav>
  )
}

export { Contents }
