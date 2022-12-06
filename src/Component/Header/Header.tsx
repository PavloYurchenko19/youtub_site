import React, { FC } from 'react'

// src

import './Header.module.scss'
const Header: FC = () => {
  return (
        <header>
            <div className={'header__container-img'}>
                <img src='/logo.svg' alt="Logo"/>
            </div>
            <h1>Your title</h1>
            <nav>
                <p>
                    Policy pravicy
                </p>
                <p>
                    About us
                </p>
            </nav>
        </header>
  )
}

export { Header }
