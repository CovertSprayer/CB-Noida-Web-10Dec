import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import AllQuotes from './pages/AllQuotes'
import AddQuote from './pages/AddQuote'
import ShowQuote from './pages/ShowQuote'
import EditQuote from './pages/EditQuote'

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<AllQuotes/>}></Route>
        <Route path='/quotes/add' element={<AddQuote/>}></Route>
        <Route path='/quotes/:id' element={<ShowQuote/>}></Route>
        <Route path='/quotes/:id/edit' element={<EditQuote/>}></Route>
      </Routes>
    </>
  )
}

export default App