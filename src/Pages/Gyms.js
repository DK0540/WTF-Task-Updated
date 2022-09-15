import React, { useEffect, useState } from 'react';
import Dropdown from '../components/Dropdown/Dropdown';
import DropdownFilter from './Footer/DropdownFilter';
import Footer from './Footer/Footer';
import FooterTop from './Footer/FooterTop';
import "./page.css";
import SocialCard from './SocialCard';

import { BsGeoAltFill } from 'react-icons/bs';


//view

import { Link } from 'react-router-dom';
import Jio from './Footer/Jio';

// import axios from "axios";

const Gyms = () => {
    const [users, setUsers] = useState([]);
    const [allUsers, setAllUserse] = useState([])
    
    const [value, setValue] = useState([])
     const [see, setSee] = useState(true)
    

    // const [show, setShow] = useState(true)
    
    //jio

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);



  
const getLocation = () => {
  if (!navigator.geolocation) {
    setStatus('Geolocation is not supported by your browser');
  } else {
    setStatus('Locating...');
    navigator.geolocation.getCurrentPosition((position) => {
      setStatus(null);
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    }, () => {
      setStatus('Unable to retrieve your location');
    });
  }
}
    //jio

   useEffect(()=>{
    (async()=>{
   let userData;
   try {
     const response = await fetch(`https://devapi.wtfup.me/gym/nearestgym?lat=${lat}&long=${lng}`);
     userData = (await response.json()).data;
     console.log(userData[0].gym_name)
   }catch (error){
     console.log(error);
     userData = [];
   }

   setAllUserse(userData);
   setUsers(userData);
    })();
    }, []);



  const filterCards = (e)=>{
    let value = e.target.value.toLowerCase();
    setValue(value)
    const filteredUsers = allUsers.filter(
        user =>(`${user.gym_name}`.toLowerCase().includes(value))
    );
    setUsers(filteredUsers)
}



const filterCardsBylocation = (event)=>{
  const value = event.target.value.toLowerCase();
  const filteredUsers = allUsers.filter(
      user =>(`${user.address2} ${user.address1}` .toLowerCase().includes(value))
  );
  setUsers(filteredUsers)
}

// const listDatas = () =>{
//   if()
// }


const handleReset =()=>{

   setValue("");
   
  };

  return (
    <>
        <div>
        <img className='bgm' src={require("../Images/bgm.png")}alt="fgg" /> 
       </div>
      <input className='search-box' placeholder='Search' value={value} onChange={filterCards}/>
      <div className='jiodiv'>
       <button className="jio" onClick={getLocation}><span className='icon1'><BsGeoAltFill /></span></button>
       <div className='clear'>
       <button  className="jio2"  onClick={()=>handleReset()}>Clear</button>
       </div>
       {console.log(`${lat} ${lng}`)}
     </div>
      


       <div className='container'>
       <div id='div1'>
        <h2>Filters</h2>
           <div className='filters'>
            <h1 >Location</h1>
            <br /><br />
            <input className='search-box2' placeholder='Search'  onInput={filterCardsBylocation}/>
            <br /><br /><br />
            <h1 >Price</h1>
            <br /><br />
            <input className='search-box3' type="text" placeholder='Max'/>
            <input className='search-box3' type="text" placeholder='Min'/>
            <br /><br /><br />
            <h1 >Cities</h1>
            <br /><br />
              
            <div  onClick={(e) => {
              setSee(false)
            
              }}>
            <Dropdown   allUsers={allUsers} setUsers={setUsers}/>
            </div>
            <div>
             {see? <div style={{display: "none"}}>
            {users.map((user,index)=>(
             <DropdownFilter userData={user} key="index"/>
             ))}
            </div> : <div style={{display: "block"}}>
            {users.map((user,index)=>(
             <DropdownFilter userData={user} key="index"/>
             ))}
            </div>  }
             
             


             </div>
        
            {/* <input className='search-box2' type="text" placeholder='Select city'/> */}
         </div>
       </div>
       
          <div className='gym'>
        {users.map((user,index)=>(
          <SocialCard userData={user} key="index"/>
          ))}
       </div>



    </div>
    <div >
    <FooterTop/>
    </div>
    <div >
    <Footer/>
    </div>
    </>
  )
}

export default Gyms




