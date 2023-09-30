import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ApplicationForm from './ApplicationForm'

function Content() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<div></div>}></Route>
            <Route path='/application' Component={ApplicationForm}></Route>
            <Route path='/workflow' element={<div></div>}></Route>
            <Route path='/preview' element={<div></div>}></Route>
        </Routes>
    </div>
  )
}

export default Content