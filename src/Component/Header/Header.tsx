import React, { FC, useState } from 'react'
import { motion } from 'framer-motion'
// src

import './Header.module.scss'
const Header: FC = () => {
  const [open, setOpen] = useState(true)
  const welcomeAnimation = 3

  // const item = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1 }
  // }
  return (

        <motion.header
            initial={{ translateX: '-100vw' }}
            animate={{ translateX: 0 }}
            transition={{
              type: 'easeIn',
              delay: welcomeAnimation - 1,
              duration: 2
            }}
        >

            <motion.div
                onClick={() => {
                  setOpen(!open)
                }
                }
                className={'header__container-img'}>

                <img src='/logo.svg' alt="Logo"/>
            </motion.div>

            <h3>
                Autumn
            </h3>
            <h1>Секрети Виноградарства і Садівництва</h1>
            <h3>
                Spring
            </h3>
            <nav>
                <p>
                    Policy pravicy
                </p>
                <p>
                    About us
                </p>
            </nav>
        </motion.header>
  )
}

export { Header }
