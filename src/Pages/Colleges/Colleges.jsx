import React, { useEffect, useState } from 'react';
import CollegeCard from './CollegeCard';
import HeadingLine from '../../components/Header/HeadingLine';
import Loading from '../share/Loader/Loading';

const Colleges = () => {
    const [collages, setCollage] = useState([])
    const [loading,setLoading] = useState(true)
  
    useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_URL}/college`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCollage(data)
                setLoading(false)
            })
    }, [])
    if(loading){
        return <Loading></Loading>
    }
    
    return (
      <div className='background-img'>
          <div className='container'>
            <HeadingLine title={'All the college information is given here'} heading={'All College'} />
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-4'>
                {
                    collages.map(collage => <CollegeCard key={collage._id} collage={collage}></CollegeCard>)
                }
            </div>
        </div>
      </div>
    );
};

export default Colleges;