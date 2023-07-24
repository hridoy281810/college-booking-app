import React from 'react';
import img from '../../../assets/person/new.jpeg'
import { Slide } from 'react-reveal';

const AdmissionAndAid = () => {
  return (
    <div className='container mt-12 mb-8'>
       <Slide bottom>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center'>
        <img className='rounded-lg' src={img} alt="" />
        <div>
          <h1 className='text-4xl mb-4 font-bold'>Admission & Aid</h1>
          <p className='mb-4 text-gray-500 font-semibold'>Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational.</p>
          <p className='text-gray-500 font-semibold'>At Estuidar University, we prepare you to launch your career by pro supportive, creative, and professional environment from which to learn practical skills, build a network of industry contacts.</p>
          <button className='btn bg-sky-800 text-white hover:text-sky-800 mt-4'>Read More</button>
        </div>
      </div>
        </Slide>
    </div>
  );
};

export default AdmissionAndAid;