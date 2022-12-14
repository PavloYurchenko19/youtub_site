import React, { FC } from 'react'
import { motion } from 'framer-motion'

// src
import style from './ContentMainPage.module.scss'
const ContentMainPage: FC = () => {
  return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'easeIn',
              delay: 4 - 1,
              duration: 1
            }}
            className={style['content__main']}>
            <div className={style.content__bottom}>
                <h2 id='Дізнавайтесь багато чого нового з статей'>Дізнавайтесь багато чого нового з статей</h2>
            </div>
            <div className={style['content__subscribe']}>
                <div>
                    <img src='/logo.svg' alt="logo"/>
                </div>
                <div>
                    <p>@grapes-and-gardening</p>
                    <a href='https://www.youtube.com/@grapes-and-gardening' target='_blank' rel="noreferrer">Subscribe</a>
                </div>
            </div>
        </motion.div>
  )
}

export { ContentMainPage }
