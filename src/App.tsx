import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { MainPage } from './Pages'
import { MainSection } from './Component'
import { HomePage } from './Pages/HomePage/HomePage'
const App: FC = () => {
  return (
        <>
            <Routes >
                <Route path='/' element={<Navigate to='home'/>}/>
                <Route path='/' element={<MainPage/>} >
                    <Route path='winter' element={<MainSection/>}/>
                    <Route path='summer' element={<MainSection/>}/>
                    <Route path='home' element={<HomePage/>}/>
                </Route>

            </Routes>
        </>
  )
}

export default App
