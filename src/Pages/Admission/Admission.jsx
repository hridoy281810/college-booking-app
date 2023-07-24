import React, { useEffect, useState } from 'react';
import AdmissionCard from './AdmissionCard';
import HeadingLine from '../../components/Header/HeadingLine';
import Loading from '../share/Loader/Loading';

const Admission = () => {
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
    <div className=' background-img'>
      <div className='container'>
      <HeadingLine title={'You can book for all college admissions'} heading={'Admission Section'} />
      {
        collages.map(collage => <AdmissionCard key={collage._id} collage={collage} />)
      }
    </div>
    </div>
  );
};

export default Admission;