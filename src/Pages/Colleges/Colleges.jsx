import React, { useEffect, useState } from 'react';
import CollegeCard from './CollegeCard';
import HeadingLine from '../../components/Header/HeadingLine';

const Colleges = () => {
    const [collages,setCollage] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/college`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCollage(data)
        })
    },[])
    return (
        <div className='container'>
             <HeadingLine title={'All the college information is given here'} heading={'All College'} />
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-4'>
            {
             collages.map(collage => <CollegeCard key={collage._id} collage={collage}></CollegeCard>)   
            }
        </div>
    </div>
    );
};

export default Colleges;