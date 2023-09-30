import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ApplicationForm from './ApplicationForm'

function Content() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<div>Personal Details</div>}></Route>
            <Route path='/appointment' Component={ApplicationForm}></Route>
            <Route path='/workflow' element={<div>Workflow</div>}></Route>
            <Route path='/preview' element={<div>Preview</div>}></Route>
        </Routes>
    </div>
  )
}

export default Content