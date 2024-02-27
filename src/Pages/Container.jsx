import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home'
import Music from '../component/Music'
import Pnf from '../component/Pnf'


function Container() {
  return (
   <Routes>
     <Route path={`/`} element={<Home/>} />
     <Route path={`/music/:id`} element={<Music/>} />
     <Route path={`/*`} element={<Pnf/>} />

   </Routes>
  )
}

export default Container