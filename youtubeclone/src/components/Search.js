import React from 'react'
import SideBar from './SideBar'
import SearchedVideos from './pages/SearchedVideos'

const Search = () => {
  return (
    <div className='container-fluid p-0 d-flex' style={{position:'relative' ,top:'60px'}}>
        <SideBar />
        <SearchedVideos />
    </div>
  )
}

export default Search