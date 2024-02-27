import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from './Pages/Menu'
import Container from './Pages/Container'

function App() {
  return (
   <BrowserRouter>
        <Menu/>
        <Container/>
   </BrowserRouter>
  )
}

export default App 