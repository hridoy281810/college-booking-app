import React, { useEffect, useState } from 'react';
import AdmissionCard from './AdmissionCard';

const Admission = () => {
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
   {
             collages.map(collage => <AdmissionCard key={collage._id} collage={collage} />)   
            }
      </div>
    );
};

export default Admission;