import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Videos.css'
import { NavLink } from 'react-router-dom'
import { AppProvider } from '../contex/AppContext'
const arr = ["All","ComputerProgramming","Tamilsongs","Telugusongs","Comedy","Mixes","Cartoons","Movies","Hindisongs","Mayalamsongs","Songs","Coding","Java","Python","Javascript","Nodejs"]
const Videos = () => {
  const [list, setList] = useState('All')
  const [bufferedVideos , setBufferedVideos] = useState([])
  const { state , dispatch  } = useContext(AppProvider)
 
  const options = {
    params: {
      q: state.search,
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST
    }
  };
  
  const suggestedVideos = async ()=>{  
         dispatch({type:'Fetch_start'})
      try {
          const response = await axios.get('https://youtube-v31.p.rapidapi.com/search',options)       
          setBufferedVideos(response.data.items)
          dispatch({type:'Fetch_success'})
         
      } catch (error) {
          dispatch({type:'Fetch_error'})
      }
     }


     const fetchingVideoHandler = (e)=>{
         dispatch({type:'Fetch_start' , payload:e.target.innerText})
         setList(e.target.innerText)   
     }

useEffect(()=>{
    suggestedVideos(); 
},[state.search])
  return (
             <div className='container-fluid videolist-main'>
                  <div className='m-0 videolist-main1'> 

                        {
                          arr.map((itm ,index)=>(
                            <button className='btn btn-light'  key={index} id={ itm === list ? 'changed' : ''}  onClick={fetchingVideoHandler}>
                               {itm}
                            </button> 
                          ))
                        }
                      
                  </div> 

                 {state.loading ?                   
                 
                        <div className='videolist-main2'>
                                <div className='container p-0'> 
                                    <div className='row'> 
                                        {
                                          bufferedVideos.map((itm,index)=>(
                                            <NavLink to={`/videos/${itm.id.videoId}`} className='col-lg-4 col-md-6 col-sm-6 col-xs-12' key={index} id='video-part'>
                                            <div className='card'  id='card1'>
                                              <div className='rounded'  id='thumbnail-img-loading'></div>
                                              <div className='card-body d-flex gap-3'>
                                                  <div id='thumbnail-channel-loading'></div>
                                                  <div className='card-title'>
                                                          <div className='card-text' style={{width:'90%'}}>
                                                              <h6 id='thumbnail-title'>{''}</h6>
                                                              <h6 id='thumbnail-channelName'>{''}</h6>
                                                          </div>
                                                  </div>
                                              </div>
                                            </div>
                                      </NavLink>
                                          ))
                                        }
                                    </div>
                                </div>
                          </div>
                          
                         : state.error ? <div className='alert alert-danger videolist-main2'>Error existed? because of daily limit of api request exceeds,please try after some times or after 24 hour likely.</div> 
                          
                          :

                          <div className='videolist-main2'>
                        <div className='container p-0'> 
                             <div className='row'> 
                                {
                                  bufferedVideos.map((itm,index)=>(
                                    <NavLink to={`/videos/${itm.id.videoId}`} className='col-lg-4 col-md-6 col-sm-6 col-xs-12' key={index} id='video-part'>
                                    <div className='card'  id='card1'>
                                       <img  src={itm.snippet.thumbnails.high.url}  className='rounded'  id='thumbnail-img'/>
                                       <div className='card-body d-flex gap-3'>
                                           <img  src={itm.snippet.thumbnails.high.url}  id='thumbnail-channel'/>
                                           <div className='card-title'>
                                                  <div className='card-text' style={{width:'90%'}}>
                                                      <h6 id='thumbnail-title'>{itm.snippet.title}</h6>
                                                      <h6 id='thumbnail-channelName'>{itm.snippet.channelTitle}</h6>
                                                  </div>
                                           </div>
                                       </div>
                                    </div>
                              </NavLink>
                                  ))
                                }
                             </div>
                        </div>
                  </div> 
                          
                          
                          } 
             </div>
  )
}

export default Videos