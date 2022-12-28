import React from 'react'
import Heading from '../../HomeUI/Heading/Heading'
import Coursel from '../../HomeUI/Coursel/Coursel'
import HomeCard from '../../HomeUI/HomeCard/HomeCard'
import Sponsers from '../../HomeUI/Sponsers/Sponsers'

const Home = () => {
  return (
    <>
    <Coursel />
    <Heading  heading="💖Let Goooo for Shopping🛒"/>
    <HomeCard headings={['MAYA','EMMA','GRACE']}/>
    <Sponsers />
    </>
  )
}

export default Home