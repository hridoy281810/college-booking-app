import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../assets/person/error.png'

const ErrorPage = () => {
  return (
    <div className="flex justify-center ">
      <div >
        <img src={photo} alt="" />
        <div className='flex justify-center '><Link to='/' className="btn btn-secondary mt-10">Back to home</Link></div>
      </div>
    </div>
  );
};

export default ErrorPage;