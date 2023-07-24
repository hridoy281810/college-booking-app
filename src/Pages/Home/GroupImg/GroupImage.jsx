import React from 'react';
import img1 from '../../../assets/group/group img1.jpg'
import img2 from '../../../assets/group/group img2.jpg'
import img3 from '../../../assets/group/group img3.jpg'
import img4 from '../../../assets/group/group img4.jpg'
import img5 from '../../../assets/group/group img6.jpg'
import img6 from '../../../assets/group/group img7.jpg'
import HeadingLine from '../../../components/Header/HeadingLine';
import { Slide } from 'react-reveal';
const GroupImage = () => {
    return (
        <div className='container'>
            <HeadingLine title={'Various college graduation images are shown in this section'} heading={'College image gallery '} />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <Slide bottom>
                <img className=' rounded' src={img1} alt="" />
                <img className='w-full rounded' src={img2} alt="" />
                <img className='w-full rounded' src={img3} alt="" />
                <img className='w-full rounded' src={img4} alt="" />
                <img className='w-full rounded' src={img5} alt="" />
                <img className='w-full rounded' src={img6} alt="" />
                </Slide>
            </div>
        </div>
    );
};

export default GroupImage;