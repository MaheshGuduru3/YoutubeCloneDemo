import React from 'react'
import SideBar from './SideBar'
import ChannelVideos from './pages/ChannelVideos'

const ChannelDetails = () => {
  return (
    <div className='container-fluid d-flex'  style={{position:'relative' ,top:'60px'}}>
        <SideBar />
        <ChannelVideos />
    </div>
  )
}

export default ChannelDetails