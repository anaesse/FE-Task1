import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import '../App.css'
import PersonalInfo from './PersonalInfo'
import Profile from './Profile'
import MoreQuestions from './MoreQuestions'
function ApplicationForm() {
  const [addQuestions, setAddQustions ]=useState(false)
  return (
    <div className='Application-page'>
      <section>
        <ImageUpload />
      </section>
      <section>
        <PersonalInfo />
      </section>
      <section>
        <Profile setAddQuestions={()=>setAddQustions(true)} />
      </section>
      <section>
        {
          addQuestions? <MoreQuestions setAddQuestions={()=>setAddQustions(false)} /> : ""
        }
        
      </section>
      </div>
  )
}

export default ApplicationForm