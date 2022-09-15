import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import './card.css';


const View =  () => {
  
  const location = useLocation();
 
 console.log(location.state.userData.user_id)

  return (
   
    <div className='about'>
    <div className="card__body">
    <div className='card__title'>{location.state.userData.gym_name}</div>
        <div className="card__rating">{location.state.userData.rating}</div>
        <div className="card__address">{location.state.userData.address1} <ln/> {location.state.userData.address2}</div>
        <div className="card__distance">{location.state.userData.distance_text}{location.state.userData.duration_text}</div>
        <div className="card__plans">{location.state.userData.plan_price}{location.state.userData.plan_duration}</div>
        <div className="card__offer">{location.state.userData.offer}</div>
    </div>
   
    <Link to="/gym" className='btn'>Back to gym page</Link>
     
    </div>
   
   
  )
}
export default View





// <div className='about'>
// <h1 className='name'>{location.state.userData.user_id}</h1>

// </div>