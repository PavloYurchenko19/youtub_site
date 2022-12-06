import React, { FC } from 'react'

// src
import './Winter.scss'
import './Summer.scss'
import './Video.scss'
import { Video } from '../Video/Video'
import { ContentMainPage } from '../ContentMainPage/ContentMainPage'
import { Main } from '../Main/Main'

const Season: FC<{ season: string }> = ({ season }) => {
  return (
        <div className={`${season}__bg`}>

            <section>
                <Video season={season}/>
                <ContentMainPage/>
            </section>
            <main>
                <Main/>
            </main>

        </div>
  )
}

export { Season }
