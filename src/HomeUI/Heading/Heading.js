import React from 'react'
import "./Heading.css"

const Heading = (props) => {
  return (
   <div className=' row m-5 p-5 align-center'>
    <h1 className='text-Color'>{props.heading}</h1>
    </div>
  )
}

export default Heading