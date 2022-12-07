import React, { FC } from 'react'

const Video: FC<{ season: string }> = ({ season }) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const VideoFromSeason: FC<{ season: string }> = ({ season }): any => {
    if (season === 'winter') {
      return <source src="/winter.mp4" type='video/mp4'/>
    } if (season === 'summer') {
      return <h1 style={{ color: 'red' }}>Summer</h1>
    }
  }

  return (
      <video autoPlay loop muted>
          <VideoFromSeason season={season}/>
      </video>
  )
}

export { Video }
