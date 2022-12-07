import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { MainPage } from './Pages'
import { MainSection } from './Component'
const App: FC = () => {
  return (
        <>
            <Routes >
                <Route path='/' element={<Navigate to='winter'/>}/>
                <Route path='/' element={<MainPage/>} >
                    <Route path='winter' element={<MainSection/>}/>

                    <Route path='summer' element={<MainSection/>}/>
                </Route>

            </Routes>
        </>
  )
}

export default App
