import React, { FC, useState } from 'react'
import './SeasonCarousel.scss'
const SeasonCarousel: FC = () => {
  const [item, setItem] = useState<string>('item1')
  return (
        <section className='carousel__main'>
            <div className='carousel'>

                <input type="radio" name="slider" onChange={(e) => {
                  setItem('item1')
                  console.dir(e)
                }
                } id="item-1" defaultChecked/>
                <input type="radio" name="slider"
                       onChange={(e) => {
                         setItem('item2')
                         console.dir(e)
                       }
                       } id="item-2"/>
                <input type="radio" name="slider"
                       onChange={(e) => {
                         setItem('item3')
                         console.dir(e)
                       }
                       } id="item-3"/>
                <input type="radio" name="slider"
                       onChange={(e) => {
                         setItem('item4')
                         console.dir(e)
                       }
                       } id="item-4"/>
                <div className="cards">
                    <label className="card" htmlFor="item-1" id="item-1">
                        Зима
                        <img src="/winterBg.jpeg" alt="Example of reviews 1"/>
                    </label>
                    <label className="card" htmlFor="item-2" id="item-2">
                        Весна
                        <img src="/весна.jpeg" alt="Example of reviews 2"/>
                    </label>
                    <label className="card" htmlFor="item-3" id="item-3">
                        Літо
                        <img src="/Літо.jpeg" alt="Example of reviews 3"/>
                    </label>
                    <label className="card" htmlFor="item-4" id="item-4">
                        Осінь
                        <img src="/Осінь.jpeg" alt="Example of reviews 4"/>
                    </label>
                </div>
            </div>
            <div className='carousel__desc' style={{ display: item === 'item1' ? 'block' : 'none' }} >
                <h2>Зима</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi dolor dolorum eaque expedita explicabo iure non omnis perferendis provident quibusdam, quis quisquam recusandae repellat similique temporibus tenetur ut?</p>
            </div>
            <div className='carousel__desc' style={{ display: item === 'item2' ? 'block' : 'none' }}>
                <h2>Весна</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi dolor dolorum eaque expedita explicabo iure non omnis perferendis provident quibusdam, quis quisquam recusandae repellat similique temporibus tenetur ut?</p>
            </div>
            <div className='carousel__desc' style={{ display: item === 'item3' ? 'block' : 'none' }}>
                <h2>Літо</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi dolor dolorum eaque expedita explicabo iure non omnis perferendis provident quibusdam, quis quisquam recusandae repellat similique temporibus tenetur ut?</p>
            </div>
            <div className='carousel__desc' style={{ display: item === 'item4' ? 'block' : 'none' }}>
                <h2>Осінь</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam animi dolor dolorum eaque expedita explicabo iure non omnis perferendis provident quibusdam, quis quisquam recusandae repellat similique temporibus tenetur ut?</p>
            </div>
        </section>
  )
}

export { SeasonCarousel }
