import React, { FC, useState } from 'react'
import { motion } from 'framer-motion'

// src
import styles from './Contents.module.scss'
import { Headings } from './Headings'
import { useHeadingsData, useIntersectionObserver } from '../../Helper'
import { headingsAnimation } from '../../Animation'
const Contents: FC = () => {
  const [activeId, setActiveId] = useState<string>('')
  useIntersectionObserver(setActiveId)
  const { nestedHeadings } = useHeadingsData()

  return (
        <motion.nav className={styles['nav__content']} aria-label="Table of contents"
                    variants={headingsAnimation}
                    initial={'offscreen'}
                    whileInView={'onscreen'}

        >
            <Headings headings={nestedHeadings} activeId={activeId}/>
        </motion.nav>
  )
}

export { Contents }
