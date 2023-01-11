import React, { FC } from 'react'

export const VideoFromSeason: FC<{ season: string }> = ({ season }): any => {
  switch (season) {
    case 'winter':
      return <source src="/winter.mp4" type='video/mp4'/>
    case 'spring':
      return <source src="/winter.mp4" type='video/mp4'/>
    case 'autumn':
      return <source src="/winter.mp4" type='video/mp4'/>
    case 'summer':
      return <source src="/winter.mp4" type='video/mp4'/>
    case 'homePage':
      return <source src="/Banner.mp4" type='video/mp4'/>
      // eslint-disable-next-line no-unreachable
      break
  }
}
