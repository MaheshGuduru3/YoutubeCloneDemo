import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import '../../styles/SingleVideo.css'
import { AppProvider } from '../../contex/AppContext'
const SuggestedVideos = () => {
  const para = useParams()
  const [sugList, setSugList] = useState([])
  const { state , dispatch}  = useContext(AppProvider)
   const options = {
    params: {
      relatedToVideoId: para.id,
      part: 'id,snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST
    }
  }

  useEffect(()=>{
    const suggest = async ()=>{
      dispatch({type:'Fetch_start'})
      try{
        const respo = await axios.get('https://youtube-v31.p.rapidapi.com/search',options)
        setSugList(respo.data.items)
        dispatch({type:'Fetch_success'})
      }
      catch(err){
        dispatch({type:'Fetch_error'})
      }
    }
    suggest()
  },[para.id])
  return (
    <div className='container'  id='suggestedvid'>


          {state.loading ? <div className=' d-none d-sm-flex justify-content-center'>
                              <div className='spinner-border text-primary'></div>
                           </div> 
            : state.error ? 
             
               <div className='alert alert-danger'>Error occured,please refresh</div>      
             :
             <div className='container p-0'>
                 <div className='row g-2 p-0'>
                         {sugList.map((itms,index)=>(

                              <NavLink to={`/videos/${itms.id.videoId}`} key={index} className='col-lg-12  col-md-12 col-sm-12 btn'> 
                              <div className='card d-flex flex-row gap-2'>
                                <img   className="card-img-top" src={itms.snippet.thumbnails.high.url} alt='thumbnail'   id='videolist-thumb'/>
                                  <div className='card-body p-0 pt-1'>
                                      <p  className='text-start' id='titled'>{itms.snippet.title}</p>
                                      <p className='text-start' style={{fontWeight:'500'}}>{itms.snippet.channelTitle}
                                
                                      </p>
                                  </div>
                              </div>
                              </NavLink>


                         ))}
                        
                       
                 </div> 
          </div>
    } 
          
    </div>
  )
}

export default SuggestedVideos