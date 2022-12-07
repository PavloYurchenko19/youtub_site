import React, { FC } from 'react'
import { contentsMain } from '../../Db'
// src
import style from './Main.module.scss'
const Main: FC = () => {
  return (
        <div className={style['main__container']}>
            {
                contentsMain?.map((content) => {
                  return (
                        <div key={content.id}>
                            <h2 id={content.title}>{content.title}</h2>
                            <p>{content.description}</p>
                            {content.subTitle !== null && content?.subTitle.map((subTitle, index) => {
                              return (
                                    <div key={index} >
                                        <h3 id={subTitle.title}>{subTitle.title}</h3>
                                        <p>{subTitle.description}</p>
                                    </div>
                              )
                            })}
                        </div>
                  )
                })
            }

        </div>
  )
}

export { Main }
