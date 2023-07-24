import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({ collage }) => {
  const { _id, admission_dates, college_image, college_name, events, research_history, sports, research_number, rating } = collage;
  return (
    <div className="card w-[365px] md:w-96 lg:w-96 sm:w-96 glass mb-8">
      <figure><img className='h-60 w-96' src={college_image} alt="car!" /></figure>
      <div className="card-body">
        <h2 className="card-title">{college_name}</h2>
        <p><strong>College Rating:</strong> {rating}</p>
        <p><strong>Admission date:</strong> {admission_dates}</p>
        <p><strong>Number of the research:</strong> {research_number}</p>
        <div className="card-actions justify-start">
          <Link to={`/CollegeDetails/${_id}`}> <button className="btn btn-sm btn-primary">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;