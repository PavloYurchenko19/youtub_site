import React, { FC } from 'react'

// src
import './Winter.scss'
import './Summer.scss'
import './Video.scss'
import styles from './Season.module.scss'
import { Video } from '../Video/Video'
import { ContentMainPage } from '../ContentMainPage/ContentMainPage'
import { Main } from '../Main/Main'
import { Contents } from '../Contents/Contents'

const Season: FC<{ season: string }> = ({ season }) => {
  return (
        <div className={`${season}__bg` }>

            <section>
                <Video season={season}/>
                <ContentMainPage/>
            </section>
            <div className={styles['main__container']}>
                <main className={styles['main__wraper']}>
                    <Main/>
                </main>
                <Contents />
            </div>
        </div>
  )
}

export { Season }
