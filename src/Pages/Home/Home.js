import React from 'react'
import Heading from '../../UI/Heading/Heading'
import Coursel from '../../UI/Coursel/Coursel'
import HomeCard from '../../UI/HomeCard/HomeCard'

const Home = () => {
  return (
    <>
    <Coursel />
    <Heading  heading="💖Let Goooo for Shopping🛒"/>
    <HomeCard headings={['MAYA','EMMA','GRACE']}/>
    </>
  )
}

export default Home