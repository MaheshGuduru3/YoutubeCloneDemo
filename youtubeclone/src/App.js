import './App.css';
import Header from './components/Header';
import { BrowserRouter , Routes , Route ,NavLink } from 'react-router-dom';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Home from './components/Home';
import Search from './components/Search';
import VideoPlays from './components/VideoPlays';
import About from './components/pages/About';
import ChannelDetails from './components/ChannelDetails';
import WatchLogin from './components/pages/WatchLogin';

function App() {
  return (
    <div className="container-fluid p-0"> 
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
             <Route path='/' element={<Home />}/>
             <Route path='/search/:search' element={<Search />}/>
             <Route path='/about'  element={<About />}/>
          
             <Route path='/channeldetails/:channel' element={<ChannelDetails />} />
             {window.localStorage.length === 1 ? <Route path='/videos/:id' element={<VideoPlays />}/>:  <Route path='/videos/:id' element={<WatchLogin />}/>}     
          </Route>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
