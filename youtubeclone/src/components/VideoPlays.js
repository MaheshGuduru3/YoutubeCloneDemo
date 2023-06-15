import React from 'react'
import SingleVideo from './pages/SingleVideo'
import SuggestedVideos from './pages/SuggestedVideos'
import '../styles/SingleVideo.css'

const VideoPlays = () => {
  return (
    <div className='container-fluid videoplays-main' style={{position:'relative' ,top:'60px'}}>
       <SingleVideo />
       <SuggestedVideos/>
    </div>
  )
}

export default VideoPlays