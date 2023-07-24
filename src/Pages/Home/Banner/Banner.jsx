import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='w-96 md:w-auto'>
        <div className="hero clgBg " >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h4>Welcome to AcademiaPulse...</h4>
            <h1 className="mb-5 text-2xl md:text-5xl sm:text-3xl lg:text-5xl font-bold">Hello Students</h1>
            <p className="mb-5 hidden md:block">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to='/admission' className="md:btn btn-primary md:bg-sky-800 btn-sm bg-sky-800 md:text-white hover:text-sky-800">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;