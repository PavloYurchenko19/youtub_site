import React, { FC } from 'react'

// src
import style from './Main.module.scss'
import { ContentWithSlider } from '../contentWihtSlider/ContentWithSlider'

const Main: FC = () => {
  return (
        <div className={style['main__container']}>
            <ContentWithSlider/>

        </div>
  )
}

export { Main }
