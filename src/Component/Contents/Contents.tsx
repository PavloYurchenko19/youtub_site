import React, { FC, useState } from 'react'
// src
import styles from './Contents.module.scss'
import { Headings } from './Headings'
import { useHeadingsData, useIntersectionObserver } from '../../Helper'
const Contents: FC = () => {
  const [activeId, setActiveId] = useState()
  useIntersectionObserver(setActiveId)
  const { nestedHeadings } = useHeadingsData()
  return (
        <nav className={styles['nav__content']} aria-label="Table of contents">
            <Headings headings={nestedHeadings} activeId={activeId}/>
        </nav>
  )
}

export { Contents }
