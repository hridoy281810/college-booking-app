import React from 'react';
import { Link } from 'react-router-dom';
//    events, research history, and sports
const FeatureCard = ({collage}) => {
 const {_id,admission_dates,college_image,college_name, events,research_history,sports} = collage
    return (
        <div className="card w-96 mb-2  glass">
        <figure><img className='h-60 w-full ' src={college_image} alt="car!"/></figure>
        <div className="card-body">
          <h2 className="card-title">{college_name}</h2>
         <p><strong>Admission date:</strong> {admission_dates}</p>
         <p><strong>Research History:</strong> {research_history}</p>
         <div className='flex justify-start gap-10 mb-4'>
        <ul>
            <strong>Events:</strong>
            <li>{events[0]}</li>
            <li>{events[1]}</li>
            <li>{events[2]}</li>
        </ul>
        <ul>
        <strong>Sports:</strong>
            <li>{sports[0]}</li>
            <li>{sports[1]}</li>
            <li>{sports[2]}</li>
        </ul>
        
         </div>
      
          <div className="card-actions justify-start">
           <Link to={`/CollegeDetails/${_id}`}> <button className="btn btn-sm btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default FeatureCard;