import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const HeadingLine = ({ title, heading }) => {
    return (
        <div className='mb-8 mt-4 md:mt-8 lg:mt-8 sm:mt-6 text-center'>
            <p className='flex justify-center  items-center gap-2 text-xl text-center  text-[#ff7350]'>  <FaGraduationCap className='text-[#ff7350]' size={20} /> {heading}</p>
            <h2 className="text-3xl font-bold mt-2">{title}</h2>
        </div>
    );
};

export default HeadingLine;