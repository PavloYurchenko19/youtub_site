import React, { FC } from 'react'
import style from '../../../Pages/HomePage/HomePage.module.scss'
import { ImageList, ImageListItem } from '@mui/material'

const Harvest: FC = () => {
  // state
  const imgArr = [
    {
      id: 1,
      name: 'Test',
      url: '/photo2.jpg',
      rows: 2,
      cols: 2
    },
    {
      id: 2,
      name: 'Test2',
      url: '/photo2.jpg',
      rows: 1,
      cols: 1
    },
    {
      id: 3,
      name: 'Test3',
      url: '/photo1.jpg',
      rows: 1,
      cols: 1
    },
    {
      id: 4,
      name: 'Test4',
      url: '/photo2.jpg',
      rows: 1,
      cols: 1
    },
    {
      id: 5,
      name: 'Test5',
      url: '/photo1.jpg',
      rows: 1,
      cols: 1
    }, {
      id: 6,
      name: 'Test6',
      url: '/photo2.jpg',
      rows: 1,
      cols: 1
    },
    {
      id: 7,
      name: 'Test7',
      url: '/photo1.jpg',
      rows: 1,
      cols: 1
    },
    {
      id: 8,
      name: 'Test8',
      url: '/photo2.jpg',
      rows: 2,
      cols: 2
    },
    {
      id: 9,
      name: 'Test9',
      url: '/photo1.jpg',
      rows: 1,
      cols: 1
    },
    {
      id: 10,
      name: 'Test10',
      url: '/photo2.jpg',
      rows: 1,
      cols: 1
    }
  ]
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function srcset (image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
          size * rows
      }&fit=crop&auto=format&dpr=2 2x`
    }
  }
  return (
        <section className={`${style['harvest__section']}`}>
          {/* <h2>Урожай</h2> */}
          <ImageList
              sx={{ width: '100%', height: 'auto', gap: 0 }}
              variant="quilted"
              cols={4}
              rowHeight={200}
          >
            {imgArr.map((item) => (
                <ImageListItem key={item.id} cols={item.cols} rows={item.rows}
                               className={`${style['img__List_container']}`}
                >
                  <div className={`${style['img__List']}`}>
                    <h2>{item.name}</h2>
                    <p className={`${item.cols === 1 ? style['img__List_p'] : style['img__List_p-big']}`} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam assumenda consequatur dolorem doloremque eos exercitationem fugit, ipsum labore minus numquam odit officiis quam quas quis sunt tempora tempore voluptates!</p>
                  </div>
                  <img
                      {...srcset(item.url, 200, item.rows, item.cols)}
                      alt={item.name}
                      loading="lazy"
                  />
                </ImageListItem>
            ))}
          </ImageList>
        </section>
  )
}

export { Harvest }
