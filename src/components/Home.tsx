import React from 'react'
import Navigation from './Navigation'
import SideBar from './SideBar'

function Home() {
  return (
    <>
      <Navigation />
      <SideBar />
      <div className='sm:pl-60'>Content...</div>
    </>
  )
}

export default Home;