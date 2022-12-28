import React, { FC } from 'react'
import style from './HomePage.module.scss'
import { About, AboutMe, AboutSeason, Harvest } from '../../Component'

const HomePage: FC = () => {
  return (
        <div className={`${style['main__container']}`}>
            <div className={`${style['welcome__container']}`}>
                <img src="/photo1.jpg" alt="tree" className={style['container__left_bg']}/>
                <h1>Хочете дізнатись про секрети догляду за садом?? <br/>
                    Ласкаво просимо
                </h1>
            </div>
            <About/>
            <AboutSeason/>
            <Harvest/>
            <AboutMe/>
        </div>
  )
}

export { HomePage }
