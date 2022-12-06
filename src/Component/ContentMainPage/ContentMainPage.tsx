import React, { FC } from 'react'

// src
import style from './ContentMainPage.module.scss'
const ContentMainPage: FC = () => {
  return (
        <div className={style['content__main']}>
            <div className={style.content__bottom}>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci aliquam consectetur deserunt distinctio dolorem eaque hic illum ipsam mollitia natus numquam placeat porro quo rem, sequi tempora tempore tenetur.</h2>
            </div>
            <div className={style['content__subscribe']}>
                <div>
                    <img src='/logo.svg' alt="logo"/>
                </div>
                <div>
                    <p>@grapes-and-gardening</p>
                    <a href='https://www.youtube.com/@grapes-and-gardening' target='_blank' rel="noreferrer">Subscribe</a>
                </div>
            </div>
        </div>
  )
}

export { ContentMainPage }
