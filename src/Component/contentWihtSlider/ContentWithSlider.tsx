import React, { FC, useLayoutEffect, useRef, useState } from 'react'
import { contentsMain } from '../../Db'
import { motion } from 'framer-motion'
import style from '../Main/Main.module.scss'
import { defaultText } from '../../DefaultText'

const ContentWithSlider: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [widthSlider, setWidthSlider] = useState<number>(0)
  const sliderRef = useRef<any>(null)
  // const sliderRef = document.querySelector('#slider')
  console.log(sliderRef)

  useLayoutEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (sliderRef?.current.scrollWidth) {
      console.log(sliderRef?.current?.scrollWidth)
      console.log(sliderRef?.current?.offsetWidth)
      setWidthSlider(+sliderRef?.current.scrollWidth - +sliderRef?.current.offsetWidth)
    }
  }, [sliderRef])

  return (
        <>
            {
                contentsMain?.map((content) => {
                  return (
                        <motion.div
                            className={style['container__content']}
                            key={content.id}
                            title={defaultText.knowMore}
                        >
                            <div className={style['container__content_desc']} >

                                <div className={style['container__content_img-container']}>
                                    <img src={content?.img?.url} alt={content?.img?.url}/>
                                </div>
                                <div>
                                    <h2 id={content.title}>{content.title}</h2>
                                    <p>{content.description}</p>
                                </div>

                            </div>
                            <motion.div id='slider' className={style['container__content_subContent-container']}
                                        ref={sliderRef}
                                        whileTap={{ cursor: 'grabbing' }}

                            >
                                <motion.div
                                    className={style['inner_carousel']}
                                    drag={'x'}
                                    dragConstraints={{ right: 0, left: -widthSlider }}
                                >

                                    {content.grapes !== null && content?.grapes.map((grape, index) => {
                                      console.log(grape?.img?.url)
                                      return (
                                            <motion.div

                                                className={style['container__content-subContent']} key={index}
                                                title={defaultText.knowMore}

                                            >
                                                <img src={grape?.img?.url} alt={grape?.img?.name}/>
                                                <h3 id={grape.name}>{grape.name}</h3>
                                            </motion.div>
                                      )
                                    })}
                                </motion.div>

                            </motion.div>

                        </motion.div>
                  )
                })
            }
        </>
  )
}

export { ContentWithSlider }
