import React, { FC } from 'react'
import style from '../../Pages/HomePage/HomePage.module.scss'

const Harvest: FC = () => {
  const imgArr = [
    {
      id: 1,
      name: '',
      url: '/Осінь.jpeg'
    },
    {
      id: 2,
      name: '',
      url: '/winterBg.jpeg'
    },
    {
      id: 3,
      name: '',
      url: '/photo1.jpg'
    },
    {
      id: 4,
      name: '',
      url: '/Літо.jpeg'
    },
    {
      id: 5,
      name: '',
      url: '/winterBg.jpeg'
    }, {
      id: 6,
      name: '',
      url: '/winterBg.jpeg'
    },
    {
      id: 7,
      name: '',
      url: '/Літо.jpeg'
    },
    {
      id: 8,
      name: '',
      url: '/winterBg.jpeg'
    },
    {
      id: 9,
      name: '',
      url: '/photo1.jpg'
    },
    {
      id: 10,
      name: '',
      url: '/Осінь.jpeg'
    },
    {
      id: 11,
      name: '',
      url: '/весна.jpeg'
    },
    {
      id: 12,
      name: '',
      url: '/Літо.jpeg'
    }
  ]

  return (
        <section className={`${style['harvest__section']}`}>
            <div className={`${style['harvest']}`}>
                <h2> Мій урожай</h2>
                <div className={`${style['harvest__main-container']}`}>
                        {
                            imgArr.map((value) => {
                              return (
                                    <div key={value.id} className={`${style['harvest__section_img']}`}>
                                    <img src={value.url} alt={value.name}/>
                                    </div>
                              )
                            })
                        }
                </div>
            </div>
        </section>
  )
}

export { Harvest }
