import React, { FC } from 'react'

// import mainStyle from './MainSection.module.scss'

import { useLocation } from 'react-router'
import { Season } from '../Season/Season'
import { pathInclude } from '../../Helper'

const MainSection: FC = () => {
  const location = useLocation()
  const path = pathInclude(location)
  return (
        <>
            <Season season={path}/>
        </>
  )
}

export { MainSection }
