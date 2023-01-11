import React, { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { Email } from '@mui/icons-material'
// src

import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
const Header: FC = () => {
  const [open, setOpen] = useState(true)
  const welcomeAnimation = 3

  return (

        <motion.header
            initial={{ translateY: -100 }}
            animate={{ translateY: 0 }}
            transition={{
              type: 'easeIn',
              delay: welcomeAnimation - 1,
              duration: 2
            }}
        >
            <div className={styles['header__container_up-side']} >
                <p>
                    <Email width={25}/> tarasLviv1999@gmail.com
                </p>
                <div className={styles['container_up-side__right-side']}>
                    <nav>Мова</nav>
                    <nav>Вхід</nav>
                    <nav>Кошик</nav>
                </div>
            </div>
            <div className={styles['header__container_down-side']}>
            <motion.div
                onClick={() => {
                  setOpen(!open)
                }
                }
                className={styles['header__container-img']}>

                <img src='/logo.svg' alt="Logo"/>
            </motion.div>

            <Link to={'home'}>

                {/* <h1>Секрети Виноградарства і Садівництва</h1> */}
            </Link>
                <div className={styles['container_down-side__right-side']}>
                    <nav>Галерея</nav>
                    <nav>Сторінки</nav>
                    <nav>Послуги</nav>
                    <nav>Магазин</nav>
                    <nav>Про нас</nav>
                </div>
            </div>

        </motion.header>
  )
}

export { Header }
