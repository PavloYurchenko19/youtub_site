import React, { FC } from 'react'
import style from '../../Pages/HomePage/HomePage.module.scss'
import global from '../../Scss/global.module.scss'
const AboutMe: FC = () => {
  return (
      <section className={`${style['aboutMe__section']}`}>
          <h2>Про мене</h2>
          <div className={`${global['wrapper']} ${style['aboutMe']}` } style={{ backgroundImage: 'url(/testMan.jpg)' }}>
              <div className={`${style['aboutMe__left-side']}`}>
                  <h3> forename surname</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur culpa deserunt, distinctio ea esse eveniet id libero minus necessitatibus, officia quibusdam quisquam quod reiciendis similique sunt tempora? Magnam, omnis!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur culpa deserunt, distinctio ea esse eveniet id libero minus necessitatibus, officia quibusdam quisquam quod reiciendis similique sunt tempora? Magnam, omnis!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur culpa deserunt, distinctio ea esse eveniet id libero minus necessitatibus, officia quibusdam quisquam quod reiciendis similique sunt tempora? Magnam, omnis!</p>
              </div>
        </div>
      </section>
  )
}

export { AboutMe }
