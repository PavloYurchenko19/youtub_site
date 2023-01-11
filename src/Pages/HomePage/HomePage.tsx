import React, { FC } from 'react'
import style from './HomePage.module.scss'
import { About, Harvest, HomeFirstScrean, SeasonCarousel } from '../../Component'

const HomePage: FC = () => {
  return (
        <div className={`${style['main__container']}`}>
                <HomeFirstScrean/>
            <About/>
             {/* <AboutSeason/> */}
             <Harvest/>
            {/* <AboutMe/> */}
            <SeasonCarousel/>
        </div>
  )
}

export { HomePage }
