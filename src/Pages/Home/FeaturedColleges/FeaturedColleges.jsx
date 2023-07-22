import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

const FeaturedColleges = () => {
    const [collages,setCollage] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/college/card`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCollage(data)
        })
    },[])
    return (
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-4'>
                {
                 collages.map(collage => <FeatureCard key={collage._id} collage={collage}></FeatureCard>)   
                }
            </div>
        </div>
    );
};

export default FeaturedColleges;