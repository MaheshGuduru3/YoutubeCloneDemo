import React from 'react'
import { NavLink } from 'react-router-dom'
import SideBar from '../components/SideBar'
import Videos from '../components/Videos'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='container-fluid p-1 home'>
         <SideBar />
         <Videos />
    </div>
  )
}

export default Home