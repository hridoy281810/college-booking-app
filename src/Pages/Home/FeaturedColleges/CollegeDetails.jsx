import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './college.css'
//  e research works, and sports categories in a detailed way. 

const CollegeDetails = () => {
    const collage = useLoaderData()
    console.log(collage)
    const {_id,rating,research_number,admission_dates,college_image,college_name, events,research_history,sports,admission_process,events_details,research_works,sports_categories} = collage
    
    return (
             <div className='container'>
        <div className='flex justify-center items-center md:mt-20'>
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={college_image} alt="Album"/></figure>
  <div className="card-body ">
    <h2 className="card-title">{college_name}</h2>
    <p className='mt-0'><strong>Admission Process:</strong> {admission_process} </p>
    <p><strong>Events Details:</strong>  </p>
    <ul className='ps-4'>
        <li>Annual Fest: {events_details?.Annual_Fest}</li>
        <li>Orientation Day: {events_details?.Orientation_Day}</li>
        <li>Seminar Series: {events_details?.Seminar_Series}</li>
    </ul>
    <p><strong>Research Works:</strong>  </p>
    <ul className='ps-4'>
        <li>{research_works[0]}</li>
        <li>{research_works[1]}</li>
        <li>{research_works[2]}</li>
    </ul>


    
    <p><strong>Sports Categories:</strong>  </p>
    <div className='flex justify-between'>
     <ul>
     <p><strong>{sports_categories[0]?.category1}</strong>  </p>
     <li> {sports_categories[0]?.teams[0]}</li>
     <li> {sports_categories[0]?.teams[1]}</li>
     </ul>
     <ul>
     <p><strong>{sports_categories[1]?.category2}</strong>  </p>
     <li> {sports_categories[1]?.teams[0]}</li>
     <li> {sports_categories[1]?.teams[1]}</li>
     </ul>
     <ul>
     <p><strong>{sports_categories[2]?.category3}</strong>  </p>
      <li> {sports_categories[2]?.teams[0]}</li>
      <li> {sports_categories[2]?.teams[1]}</li>
     </ul>
    </div>
         <p><strong>Number of the research:</strong> {research_number}</p>
    <p><strong>College Rating:</strong> {rating}</p>
  </div>
</div>
        </div>
        </div>
        
      
    );
};

export default CollegeDetails;