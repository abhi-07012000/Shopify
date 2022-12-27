import React from 'react'
import "./Heading.css"

const Heading = (props) => {
  return (
   <div className='align-center'>
    <h1 className='text-Color'>{props.heading}</h1>
    </div>
  )
}

export default Heading