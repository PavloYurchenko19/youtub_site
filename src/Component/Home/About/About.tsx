import React, { FC } from 'react'
import style from '../../../Pages/HomePage/HomePage.module.scss'
import global from '../../../Scss/global.module.scss'
import ReactPlayer from 'react-player'

const About: FC = () => {
  return (
      <section className={`${style['second__section']}`}>
          <div className={`${global['wrapper']} ${style['about']}`}>
              <h3>На цьому сайті ви дізнаєтесь</h3>
              <div className={`${style['about__desc_container']}`} >

                  <div className={`${style['about__left_side']}`}>
                      <div className={`${style['about__container']}`}>

                          <div className={`${style['about__icon']}`}>
                              <img src="/snow.png" alt="snow"/>
                          </div>
                          <div className={`${style['about__desc']}`}>
                              <h3>Plants Care</h3>
                              <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat
                                  sodales.service its.</p>
                          </div>
                      </div>
                      <div className={`${style['about__container']}`}>

                          <div className={`${style['about__icon']}`}>
                              <img src="/snow.png" alt="snow"/>
                          </div>
                          <div className={`${style['about__desc']}`}>
                              <h3>Plants Care</h3>
                              <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat
                                  sodales.service its.</p>
                          </div>
                      </div>
                      <div className={`${style['about__container']}`}>

                          <div className={`${style['about__icon']}`}>
                              <img src="/snow.png" alt="snow"/>
                          </div>
                          <div className={`${style['about__desc']}`}>
                              <h3>Plants Care</h3>
                              <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat
                                  sodales.service its.</p>
                          </div>
                      </div>

                  </div>
                  <div className={`${style['about__right_side']}`}>
                      <div className={`${style['video']}`}>
                          <ReactPlayer
                              url='https://www.youtube.com/embed/FMbbYgdJSac'
                              width='100%'
                              height='100%'
                          />
                      </div>

                  </div>
              </div>
          </div>
      </section>

  )
}

export { About }
