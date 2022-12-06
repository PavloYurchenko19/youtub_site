import React, { FC } from 'react'
// src
import style from './Main.module.scss'
import { posts } from '../../Db/Posts'
import ReactPlayer from 'react-player'
const Main: FC = () => {
  return (
        <div className={style['main__container']}>
            <h2> Here you can read about ...  </h2>
            <div className={style['main__posts_container']}>

            {posts.map((post) => {
              return (

                <div key={post.id} className={style['main__post']}>
                    <h2>{post.title}</h2>
                    <div className={style['main__post_img-container']}
                    onClick={() => {
                      const a = document.createElement('a')
                      a.href = post.youtube
                      a.setAttribute('target', '_blank')
                      a.click()
                    }
                    }
                    >
                        <ReactPlayer url='https://www.youtube.com/embed/AjdJGVm7mL8'
                                     height="100%"
                                     width='100%'
                        />
                    </div>
                    <p>
                        {post.description}
                    </p>
                </div>
              )
            })}

            </div>

        </div>
  )
}

export { Main }
