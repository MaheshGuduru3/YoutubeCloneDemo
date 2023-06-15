import React from 'react'
import { NavLink } from 'react-router-dom'

const WatchLogin = () => {
  return (
    <div className='container-fluid'  style={{position:'relative'  , top:'60px'}}>
      <div className='container d-flex flex-column justify-content-center align-items-center' style={{width:'100%' , height:'91vh'}}> 
          <h2>Oops!</h2>
          <p>Something shows that you went wrong? By click on the video to play</p>
          <p>For that please <NavLink to='/login'>Login</NavLink> to Watch it.</p>   
      </div>
    </div>
  )
}

export default WatchLogin