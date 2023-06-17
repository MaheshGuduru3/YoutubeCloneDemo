import React, { useContext, useEffect, useState } from 'react'
import '../../styles/SingleVideo.css'
import ReactPlayer from 'react-player'
import { useParams , useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AppProvider } from '../../contex/AppContext'

// Render a YouTube video player
const SingleVideo = () => {
   
    const par = useParams()
    const navigate = useNavigate()
    const [plays , setPlays] = useState([])

    const { state , dispatch } = useContext(AppProvider)
    const options = {
      params: {
        part: 'contentDetails,snippet,statistics',
        id: par.id
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST
      }
    };

   


   
  
    
    useEffect(()=>{
      const playing = async()=>{
         dispatch({type:'Fetch_start'})
         const BASE_URL = process.env.REACT_APP_RAPID_API_URL
        try{
        const responsed = await axios.get(  BASE_URL +'/videos',options)    
        setPlays(responsed.data.items)
        dispatch({type:'Fetch_success'})
        }
        catch(err){
          dispatch({type:'Fetch_error'})
        }
      }
        playing()
    },[])

  return (
     <div className='container-fluid p-0' id='singlevideo'>

      { state.loading ? <div className='d-flex justify-content-center'>
                    <div className='spinner-border text-primary'>

                    </div>
                </div>
        
         : state.error ? 
             <div  className='alert alert-danger'>
                 Server side Error,please wait
             </div>
        :
        <>
             {plays.map((itmss)=>(
              <div className='container' style={{width:'85%'}}>
                  <div className='container p-0 d-flex flex-column gap-3' style={{backgroundColor:'white'}}>
                  <div class="ratio ratio-sm ratio-md ratio-lg ratio-16x9">
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${par.id}`} alt='videoplays' controls='true' width='100%' height='100%' playing/>
                  </div>
                  <span className='' style={{color:'black',fontWeight:'500'}}>{itmss.snippet.title}</span>
                  <div className='d-flex justify-content-between'>
                    <span>{(itmss.statistics.viewCount)} views</span> 
                    <span>{itmss.statistics.likeCount} likes</span> 
                  </div>
                  </div>
                  <div className='container d-flex justify-content-between align-items-center' style={{width:'100%',height:'10vh',borderTop:'1px solid black', borderBottom:'1px solid black',backgroundColor:'white'}}>  
                      <span>
                      <img  src={itmss.snippet.thumbnails.high.url} alt='logo'  style={{width:'40px',height:'40px',borderRadius:'50%',objectFit:'cover',cursor:'pointer'}} onClick={()=>{
                         navigate(`/channeldetails/${itmss.snippet.channelId}`)
                      }}/>
                      <span className='px-2' style={{fontWeight:'500',color:'black'}}> {itmss.snippet.channelTitle}
                              
                      </span>
                      </span>
                      <button className='btn btn-danger'>Subscribe</button>
                    
                  </div>    
              </div>
       ))}
        
        
        </>
        
        
        
        
        
      }
       
    
        
        
    </div>
  )
}

export default SingleVideo