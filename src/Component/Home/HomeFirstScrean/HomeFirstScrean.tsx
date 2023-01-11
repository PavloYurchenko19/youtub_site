import React, { FC } from 'react'
import style from '../../../Pages/HomePage/HomePage.module.scss'
import { VideoFromSeason } from '../../../Helper'
const HomeFirstScrean: FC = () => {
  return (
      <section className={`${style['section__welcome__container']}`}>
          <video autoPlay loop muted>
              <VideoFromSeason season={'homePage'}/>
          </video>
          <div className={`${style['section__welcome__container_video-footer']}`}>
                <h3>Вирощуємо разом!</h3>
          </div>
      </section>
  )
}

export { HomeFirstScrean }
