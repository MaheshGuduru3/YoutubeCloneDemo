import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {NavLink} from 'react-router-dom'
import {app} from '../../config/Firebase'

import { ToastContainer , toast } from 'react-toastify'
import '../../styles/Login.css'
const Register = () => {

    const googleAuth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()
    const [regTokenAuth , setRegTokenAuth] = useState('')

    const registerWithGoogle = async ()=>{
          await signInWithPopup(googleAuth , googleProvider)
          .then((usercred)=>{
            googleAuth.onAuthStateChanged((usercred)=>{
               usercred.getIdToken().then((token)=>{
                   setRegTokenAuth(token)
               })
            })
        })
    }
   
    const authState = async ()=>{
        await fetch( process.env.SERVER_SIDE +'/api/register',{
          method:"POST",
          headers : {
           'Authorization' : regTokenAuth
          }
        }).then((res)=>res.json())
        .then((data)=>{
         if(data.success === true){
            window.localStorage.setItem('auth' , JSON.stringify(data))
            window.location.href = '/'
         }
         else{
             toast.error('Email is already exists.please login')
         }
        })
 
        .catch((err)=>{
            toast.error('server side error , please wait..'); 
        })
   
    }
   
    useEffect(()=>{
       if(regTokenAuth){
          authState()
       }
    },[registerWithGoogle,authState])
  
  
  return (
    <div className='container-fluid p-0 d-flex text-center align-items-center' style={{width:'100%' , height:'100vh'}}>
         <div className='container  p-0 shadow bg-body-tertiary rounded d-flex justify-content-evenly flex-column align-items-center' id='register'>
               <h3 className='text' color='black'>Register</h3>
               <div className='border b-2 w-lg-50 btn' onClick={registerWithGoogle}>
                  <span className='fs-2'><FcGoogle /></span>
                  <span className='fs-5'>Sign With Google</span>
               </div>
               <div>Already have an Account? <NavLink to='/login'>Login</NavLink></div>
         </div> 
         <ToastContainer />
    </div>
  )
}

export default Register