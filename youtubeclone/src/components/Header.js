import React, { useContext, useEffect } from 'react'
import '../styles/Header.css';
import logo from '../Assests/youtube-logo.png'
import {NavLink , Outlet} from 'react-router-dom'
import { AppProvider } from '../contex/AppContext';
import { ToastContainer , toast} from 'react-toastify'


const Header = () => {
  const {state , dispatch} = useContext(AppProvider)
  const logOut = ()=>{
     window.localStorage.clear()
     toast.success('logged out')
     setTimeout(()=>{window.location.reload()},5000)
  }
  
  const searchingData = (e)=>{
      console.log(e.target.value,"searching..");
    
      dispatch({type:'Fetch_search' , payload : e.target.value})
  }     


  useEffect(()=>{
    if(window.localStorage.length === 1){  
      setTimeout(()=>{  toast.success("logged in") },3000)
     }     
  },[])   
  return (
       <div className='container-fluid p-0'>
         <nav className='navbar p-1 container-fluid' style={{position:'fixed',zIndex:'1',backgroundColor:'white'}}>
            <div className='container-fluid d-flex flex-nowrap justify-content-between'>
                <div className='navbar-brand p-0 d-flex'>
                    <button className='btn p-0 me-1 d-none d-sm-block'>
                          <i className="bi bi-list fs-4"></i>
                    </button>
                
                    <NavLink to='/' className='d-flex align-items-center anchor  btn'>
                        <img src={logo} alt='youtube-logo' width='25' height='18'/>
                        <div className='d-flex mt-1'>
                            <h4 className='fs-5' style={{letterSpacing:'-1.5px'}}>YouTube</h4>
                            <span className='' style={{fontSize:'0.4rem'}}>IN</span>
                        </div>
                    </NavLink>
                </div>
                
                <div className="input-group d-none d-sm-flex" id='search-main'>
                    <input type="search" className="form-control" placeholder="Search for" id='search-button' onChange={(e)=>searchingData(e)}/>
                    <NavLink to={`/search/${state.searchBar}`}  className="input-group-text text-center" id="search-icon"><i className="bi bi-search"></i></NavLink>     
                </div>
                <div className="input-group d-flex d-sm-none w-100 me-2" id='search-main'>
                    <input type="search" className="form-control" placeholder="Search for" id='search-button' onChange={(e)=>searchingData(e)}/>
                    <NavLink to={`/search/${state.searchBar}`}  className="input-group-text text-center" id="search-icon"><i className="bi bi-search"></i></NavLink>     
                </div>
              
              
                <div className='' style={{width:'15%'}}>
                  { window.localStorage.length ?   
                        <div className="dropdown">
                              <span className="btn p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={JSON.parse(window.localStorage.getItem('auth')).info.photoURL}style={{width:'37px' , height:'37px' , borderRadius:'50%'}} referrerPolicy='no-referrerpolicy'/>
                              </span>
                              <ul className="dropdown-menu">
                                <li><h6 className="dropdown-item">{JSON.parse(window.localStorage.getItem('auth')).info.displayName}</h6></li>
                                <li><NavLink className="dropdown-item"  id='drop' to='/' onClick={logOut}>SignOut</NavLink></li>
                                <li><NavLink className="dropdown-item"  id='drop' to='/about' >Aboutus</NavLink></li>
                              </ul>
                        </div>    
                      : 
                        <div class="dropdown">
                            <span className="btn p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i  className='bi bi-person-circle fs-2'/>
                            </span>
                            <ul className="dropdown-menu">
                              <li><NavLink className="dropdown-item" to="/login" >LogIn</NavLink></li>
                              <li><NavLink className="dropdown-item" to="/register" >SignIn</NavLink></li>
                            </ul>
                        </div>          
                      } 
                </div>
            </div>
        </nav>
         <Outlet />
        <ToastContainer />
     </div>
  )

}

export default Header