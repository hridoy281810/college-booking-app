import React from 'react';

const MyCollegeCard = ({ collage }) => {
  const { _id, rating, research_number, admission_dates, college_image, college_name, events, research_history, sports, admission_process, events_details, research_works, sports_categories, candidateName, image, } = collage
  return (
    <>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200  mb-4">
        <div className="collapse-title text-xl font-medium">
          {college_name}
        </div>
        <div className="collapse-content">

          <div className=" p-10 glass mb-8">
            <figure><img className='' src={college_image} alt="car!" /></figure>
            <div className="">
              <h2 className="card-title">{college_name}</h2>
              <p><strong>College Rating:</strong> {rating}</p>
              <p><strong>Admission date:</strong> {admission_dates}</p>
              <p><strong>Number of the research:</strong> {research_number}</p>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default MyCollegeCard;