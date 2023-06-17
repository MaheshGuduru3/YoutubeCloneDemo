import React, { useContext, useEffect, useState } from 'react'
import '../../styles/SearchedVideos.css'
import { NavLink } from 'react-router-dom'
import { AppProvider } from '../../contex/AppContext'
import axios from 'axios'
const SearchedVideos = () => {

    const [searchVideos , setSearchVideos] = useState([])
   
    const { state , dispatch } = useContext(AppProvider)

    const options = {
        params: {
          q: state.searchBar,
          part: 'snippet,id',
          regionCode: 'US',
          maxResults: '50',
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST
        }
      };
      
      const searchedSuggestedVideos = async ()=>{  
           dispatch({type:'Fetch_start'})
           const BASE_URL = process.env.REACT_APP_RAPID_API_URL
          try {
              const response = await axios.get(  BASE_URL +'/search',options)    
              setSearchVideos(response.data.items)
              dispatch({type:'Fetch_success'})
             
          } catch (error) {
              dispatch({type:'Fetch_error'})
          }
         }



useEffect(()=>{
     searchedSuggestedVideos()
},[state.searchBar])

  return (
    <div className='container-fluid p-0' id='searchvideo-main'>
           <div className='container m-0 pt-3'>
                   


                  {state.loading ? <div class="d-flex justify-content-center">
                                        <div class="spinner-border text-primary">
                                          <span class="visually-hidden">Loading...</span>
                                        </div>
                                   </div> 
                    : state.error ? <div className='alert alert-danger'>Error is occured please come after a while...</div> :    
                    <div className='row g-5'>
                      {searchVideos.map((itms , index) => (        
                            <NavLink to={`/videos/${itms.id.videoId}`} className='col-lg-10 col-md-12 col-sm-12 col-xs-12' key={index} id='search-part'>
                                    <div className='card'  id='search-card1'>
                                        <img  src={itms.snippet.thumbnails.high.url} alt='image'  className='rounded'  style={{maxWidth:'100%',height:'35vh'}} />
                                        <div className='card-body'>
                                            <div className='card-title' style={{width:'90%'}}>
                                                <div className='card-text'>
                                                    <h6 className='title-text'>{itms.snippet.title}</h6>
                                                    <div>
                                                        <img src={itms.snippet.thumbnails.high.url} alt='img'  style={{width:'35px' , height:'35px' , borderRadius:'50%'}} />
                                                        <span style={{fontWeight:'700'}}>{itms.snippet.channelTitle}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </NavLink>

                      ))}
                    
                    </div>
           }           
           </div>
    </div>
  )
}

export default SearchedVideos