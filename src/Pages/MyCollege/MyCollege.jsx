import { useEffect, useState } from "react";
import MyCollegeCard from "./MyCollegecard";
import Review from "./Review";
import HeadingLine from "../../components/Header/HeadingLine";


const MyCollege = () => {
    const [collages,setCollage] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myCollege`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCollage(data)
        })
    },[])
     
    return (
        <div className="container mt-8">
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-10">
            
            <div>
            <HeadingLine title={'The information of all the colleges you have edited is given here'} heading={'My College'} />
            {
             collages.map(collage => <MyCollegeCard key={collage._id} collage={collage} />)   
            }
            </div>
            <div>
            <Review   />  
            
            </div>
            </div>
            
        </div>
    );
};

export default MyCollege;