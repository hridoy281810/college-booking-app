import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { RiStarFill } from 'react-icons/ri';
import { Slide } from 'react-reveal';
import HeadingLine from '../../../components/Header/HeadingLine';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/reviews`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setReviews(data);
      });
  }, []);
 
  return (
    <div className="container py-10">
      <HeadingLine title={'You can see the reviews'} heading={'College Reviews'} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
           <Slide bottom>

          <div key={review._id} className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
            <FaQuoteLeft className="text-3xl mb-4 text-primary" />
            <img src={review?.reviewerImage} alt="Reviewer" className="w-20 h-20 rounded-full mb-4" />
            <h3 className="text-xl font-semibold mb-2">{review?.reviewer}</h3>
            <h3 className="text-xl font-semibold mb-2">{review?.college}</h3>
            <p className="text-gray-800 text-center mb-4">{review?.comment}</p>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <RiStarFill key={star} className={`text-yellow-500 ${review?.rating >= star ? 'fill-current' : 'fill-none'}`} />
              ))}
            </div>
          </div>
           </Slide>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
