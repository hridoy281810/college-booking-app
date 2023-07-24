import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import HeadingLine from '../../../components/Header/HeadingLine';

const FeaturedColleges = () => {
    const [collages, setCollage] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL}/college/card`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCollage(data)
            })
    }, [])
    return (
        <div className='container mt-8'>
            <HeadingLine title={'You can see the features of different colleges'} heading={'College Featured'} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 my-4'>
                {
                    collages.map(collage => <FeatureCard key={collage._id} collage={collage}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedColleges;