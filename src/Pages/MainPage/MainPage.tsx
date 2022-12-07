import React, { FC, useState } from 'react'
import { Outlet } from 'react-router'
import { Header } from '../../Component'

// src
import style from './MainPage.module.scss'
const MainPage: FC = () => {
  const [isAnimation, setIsAnimation] = useState(true)
  setTimeout(() => {
    setIsAnimation(false)
  }, 2500)
  return (
        <div className={`${style['main__container']}`}>
            {isAnimation && <div className={style['welcome']}>
                <h1>Welcome to <br/>
                    Секрети Виноградарства і Садівництва</h1>
            </div> }

           <Header/>
            <Outlet/>
        </div>
  )
}

export { MainPage }
