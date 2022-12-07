import React, { FC, useState } from 'react'

// src
import style from '../../Pages/MainPage/MainPage.module.scss'
import { VideoFromSeason } from '../../Helper'
const Video: FC<{ season: string }> = ({ season }) => {
  const [isAnimation, setIsAnimation] = useState(true)
  setTimeout(() => {
    setIsAnimation(false)
  }, 2500)

  return (
      <>
        {isAnimation && <div className={style['welcome']}>
          <h1>Welcome to <br/>
            Секрети Виноградарства і Садівництва</h1>
        </div> }
      <video autoPlay loop muted>
          <VideoFromSeason season={season}/>
      </video>
      </>

  )
}

export { Video }
