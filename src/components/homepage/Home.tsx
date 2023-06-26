import React, { ReactElement } from 'react'
import Navigation from './Navigation'
import SideBar from './SideBar'
import Trainings from './Trainings';

function Home(): ReactElement {
  return (
    <>
      <Navigation />
      <SideBar />
      <Trainings />
    </>
  )
}

export default Home;