import React, { FC } from 'react'
import { Outlet } from 'react-router'
import { Header } from '../../Component'

// src
import style from './MainPage.module.scss'
const MainPage: FC = () => {
  return (
        <div className={`${style['main__container']}`}>
           <Header/>
            <Outlet/>
        </div>
  )
}

export { MainPage }
