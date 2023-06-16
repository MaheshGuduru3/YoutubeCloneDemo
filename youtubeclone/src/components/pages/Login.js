import React, { useEffect, useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {NavLink } from 'react-router-dom'
import { getAuth , signInWithPopup , GoogleAuthProvider} from 'firebase/auth'
import {app} from '../../config/Firebase'
import { ToastContainer , toast} from 'react-toastify'
import '../../styles/Login.css'



const Login = () => {
 const googleAuth = getAuth(app)
 const googleProvider = new GoogleAuthProvider()
 const [tokenAuth , setTokenAuth] = useState('')

 const loginWithGoogle = async ()=>{
       await signInWithPopup(googleAuth , googleProvider)
       .then((usercred)=>{
         googleAuth.onAuthStateChanged((usercred)=>{
            usercred.getIdToken().then((token)=>{
                setTokenAuth(token)
            })
         })
     })
 }

 const authState = async ()=>{
     await fetch('https://dreamy-palmier-88fdf2.netlify.app/api/login',{
       method:"POST",
       headers : {
        'Authorization' : tokenAuth
       }
     }).then((res)=>res.json())
       .then((data)=>{
        if(data.success === true){
           window.localStorage.setItem('auth' , JSON.stringify(data))
           window.location.href = '/'
        }
        else{
         toast.error('Need to signup')
        }
       })

       .catch((err)=>{
           toast.error('server side error , please wait..'); 
       })

      }

 useEffect(()=>{
    if(tokenAuth){
       authState()
    }
 },[loginWithGoogle,authState])

  return (
    <div className='container-fluid p-0 d-flex text-center align-items-center' style={{width:'100%' , height:'100vh'}}>
         <div className='container p-0 shadow bg-body-tertiary rounded d-flex justify-content-evenly flex-column align-items-center' id='login'>
               <h3 className='text' color='black'>Login</h3>
               <div className='border b-2 w-lg-50 btn' onClick={loginWithGoogle}>
                  <span className='fs-2'><FcGoogle /></span>
                  <span className='fs-5'>Login With Google</span>
               </div>
               <div>Don't have an Account? <NavLink to='/register'>Signin</NavLink></div>
         </div> 
         <ToastContainer />
    </div>
  )
}

export default Login