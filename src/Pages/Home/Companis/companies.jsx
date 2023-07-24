import React from 'react';
import img1 from '../../../assets/person/logo1.png'
import img2 from '../../../assets/person/logo2.png'
import img3 from '../../../assets/person/logo3.png'
import img4 from '../../../assets/person/logo6.png'
import img5 from '../../../assets/person/b-logo5.png'

const Companies = () => {
    return (
        <div className='bg-[#ff7350]'>
            <div className='container'>
                <div className='grid grid-cols-3 gap-4 sm:flex md:flex lg:flex justify-between py-8'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Companies;