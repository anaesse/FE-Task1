import React from 'react'
import ImageUpload from './ImageUpload'
import '../App.css'
import PersonalInfo from './PersonalInfo'
import Profile from './Profile'
import MoreQuestions from './MoreQuestions'

function ApplicationForm() {
  return (
    <div className='Application-page'>
      <section>
        <ImageUpload />
      </section>
      <section>
        <PersonalInfo />
      </section>
      <section>
        <Profile />
      </section>
      <section>
        <MoreQuestions />
      </section>
      </div>
  )
}

export default ApplicationForm