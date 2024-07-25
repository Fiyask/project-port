import React from 'react'
import "./contentSkills.css"

const ContentSkills = ({heading,title}) => {
  return (
    <div className='content__skills'>
        <h3>{heading}</h3>
        <small>{title}</small>

    </div>
  )
}

export default ContentSkills