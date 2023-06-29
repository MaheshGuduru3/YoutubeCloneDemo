import React, { useContext, useEffect, useState } from 'react'
import {AiFillHome , AiFillFire} from 'react-icons/ai'
import {HiMusicNote} from 'react-icons/hi'
import {MdSportsVolleyball ,MdTheaterComedy ,MdNature ,MdWebStories ,MdFestival} from 'react-icons/md'
import {BiNews} from 'react-icons/bi'
import {CgGames} from 'react-icons/cg'
import {ImPodcast} from 'react-icons/im'
import {GiOppositeHearts ,GiLifeBuoy ,GiWildfires} from 'react-icons/gi'
import {SiDcentertainment  , SiLaunchpad} from 'react-icons/si'
import {TbBrandYoutubeKids} from 'react-icons/tb'
import {NavLink} from 'react-router-dom'
import '../styles/SideBar.css'
import { AppProvider } from '../contex/AppContext'
const SideBar = () => {
    const [sideBar , setSideBar] = useState('Home')
    const {  state , dispatch , modSearch , setModSearch } = useContext(AppProvider)

    const FetchingSideBarVideos = (e)=>{
           setModSearch(e.target.innerText)
           setSideBar(e.target.innerText)
       
    }
  useEffect(()=>{

    },[modSearch])
  return (
    <div className='p-0 sidebar-main'>
        <div className='container d-none d-lg-flex flex-column gap-2' id='sidebar-main1' onClick={FetchingSideBarVideos}>
             <NavLink  to='/' className='container   btn p-0' id={ 'Home' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><AiFillHome /></span>
                     <span className='fs-6'>Home</span>
                 </div>
                
             </NavLink>
             <NavLink  to='/' className='container btn p-0'   id={ 'Trendings' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><AiFillFire /></span>
                     <span className='fs-6'>Trendings</span>
                 </div>          
             </NavLink>
             <NavLink  to='/' className='container btn p-0'   id={ 'Sports' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><MdSportsVolleyball /></span>
                     <span className='fs-6'>Sports</span>
                 </div>          
             </NavLink>
             <NavLink  to='/' className='container btn p-0'   id={ 'Music' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><HiMusicNote /></span>
                     <span className='fs-6'>Music</span>
                 </div>          
             </NavLink>
             <NavLink  to='/' className='container btn p-0'   id={ 'News' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><BiNews /></span>
                     <span className='fs-6'>News</span>
                 </div>          
             </NavLink>
             <NavLink  to='/' className='container btn p-0'   id={ 'Podcasts' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><ImPodcast /></span>
                     <span className='fs-6'>Podcasts</span>
                 </div>          
             </NavLink>
             <NavLink  to='/' className='container btn p-0'   id={ 'Entertainment' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><SiDcentertainment /></span>
                     <span className='fs-6'>Entertainment</span>
                 </div>          
             </NavLink>
             <NavLink  to='/' className='container btn p-0'  id={ 'Kids' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><TbBrandYoutubeKids/></span>
                     <span className='fs-6'>kids</span>
                 </div>          
             </NavLink>
             <NavLink  to='/' className='container btn p-0'   id={ 'Games' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><CgGames /></span>
                     <span className='fs-6'>Games</span>
                 </div>          
             </NavLink>
             <NavLink  to='/' className='container btn p-0'   id={ 'Comedy' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><MdTheaterComedy /></span>
                     <span className='fs-6'>Comedy</span>
                 </div>          
             </NavLink>
             <NavLink  to='/' className='container btn p-0'   id={ 'Morals' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><GiOppositeHearts/></span>
                     <span className='fs-6'>Morals</span>
                 </div>          
             </NavLink>
             <NavLink  to='/' className='container btn p-0'  id={ 'LifeLessons' === sideBar ? 'data' : 'data1'}>
                  <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><GiLifeBuoy/></span>
                     <span className='fs-6'>LifeLessons</span>
                 </div>          
             </NavLink>
             <NavLink  to='/' className='container btn p-0'   id={ 'Wildlife' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><GiWildfires/></span>
                     <span className='fs-6'>Wildlife</span>
                 </div>          
             </NavLink>
             <NavLink  to='/' className='container btn p-0'   id={ 'Nature' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><MdNature/></span>
                     <span className='fs-6'>Nature</span>
                 </div>          
             </NavLink>
             <NavLink  to='/' className='container btn p-0'   id={ 'Webseries' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><MdWebStories/></span>
                     <span className='fs-6'>Webseries</span>
                 </div>          
             </NavLink>
             <hr />
             <NavLink  to='/' className='container btn p-0'   id={ 'Djmix' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><SiLaunchpad/></span>
                     <span className='fs-6'>Djmix</span>
                 </div>          
             </NavLink>
             <NavLink  to='/' className='container btn p-0'   id={ 'Devotee' === sideBar ? 'data' : 'data1'}>
                 <div className='container d-flex align-items-center gap-2'>
                     <span className='fs-4'><MdFestival/></span>
                     <span className='fs-6'>Devotee</span>
                 </div>          
             </NavLink>
        </div>
    </div>
  )
}

export default SideBar