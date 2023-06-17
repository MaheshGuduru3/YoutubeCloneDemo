import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import '../../styles/ChannelVideos.css'
import axios from 'axios'
import { AppProvider } from '../../contex/AppContext'
const ChannelVideos = () => {
    const channels = useParams()
    const { state , dispatch } = useContext(AppProvider)
    const [channelHistory , setChannelHistory] = useState([])
    const [channelWatch , setChannelWatch] = useState([]);
    const BASE_URL = process.env.REACT_APP_RAPID_API_URL
   
    const options = {
        params: {
          part: 'snippet,statistics',
          id: channels.channel,
        },
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST
        }
      };
     
      const options2 = {
        params: {
          channelId: channels.channel,
          part: 'snippet',
          order: 'date',
          maxResults: '50'
        },
          headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST
      }
     }

 useEffect(()=>{
     const channel = async()=>{
                dispatch({type:'Fetch_start'})
           
        try{
            const response = await axios.get(BASE_URL + '/channels',options)
            setChannelHistory(response.data.items)
            dispatch({type:'Fetch_success'})
        }
        catch(err){
            dispatch({type:'Fetch_error'})
        }
          
     }
     const channelVideos = async()=>{
            dispatch({type:'Fetch_start'})
        try{
            const responsed = await axios.get(BASE_URL +'/search',options2)
            setChannelWatch(responsed.data.items)
            dispatch({type:'Fetch_success'})
        }
        catch(err){
            dispatch({type:'Fetch_error'})
        }
          
     }  
     channel() 
     channelVideos() 
 },[])




  return (
    <div className='container-fluid' id='channel-videos-all'>
        { state.loading ? <div className='container p-0' style={{width:'100%' , height:'90vh' ,  backgroundColor:'white'}}>
                     <div className='d-flex justify-content-center text-primary'>
                      <div className='spinner-border'></div>
                      </div>
          </div>
          :

          state.error ?

          <div className='container p-0' style={{width:'100%' , height:'90vh' ,  backgroundColor:'white'}}>
                     <div className='d-flex'>
                     <h5 className='alert alert-danger'>Error Occured,Please try Again.</h5>
                     </div>

          </div>
          
        :
          
        
        <>
        <div className='container p-0' style={{width:'100%' , height:'50vh' ,  backgroundColor:'white'}}>
            {channelHistory.map((itm)=>(
                <>
                 <div>
                    <img  className='img-fluid'  src={itm.snippet.thumbnails.high.url} alt='banner'  style={{width:'100%' , height:'24vh'}} />
                </div>
                
                <div className='d-flex justify-content-center flex-column align-items-center'>
                    <img  className='img-fluid'  src={itm.snippet.thumbnails.high.url} alt='banner'  style={{width:'150px' , height:'150px' , borderRadius:'50%'}} />
                    <h4>{itm.snippet.title}</h4>
                    <h4>{itm.statistics.subscriberCount} Subscribers</h4>
                </div>
                </>
            ))}
        </div>
        <div className='container' style={{position:'relative' , top:'60px'}}>
             <h4>Videos</h4>
             <div className='row'>
                
                     {channelWatch.map((itm,index)=>(
                       <NavLink to={`/videos/${itm.id.videoId}`} className='col-lg-4 col-md-6 col-sm-6 col-xs-12' key={index} id='channel-video-part'>
                       <div className='card'  id='channel-card1'>
                         <img src={itm.snippet.thumbnails.high.url} className='rounded'  id='channel-thumbnail-img' />
                         <div className='card-body d-flex gap-3'>
                             <div className='card-title'>
                                     <div className='card-text' style={{width:'90%'}}>
                                         <h6 id='channel-thumbnail-title'>{itm.snippet.title}</h6>
                                     </div>
                             </div>
                         </div>
                       </div>
                 </NavLink>
                     ))}
                
             </div>
        </div>
        </>
}
    </div>
  )
}

export default ChannelVideos