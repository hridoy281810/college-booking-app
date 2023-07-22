import { useEffect, useState } from "react";
import MyCollegeCard from "./MyCollegecard";
import FeedbackForm from "../Home/FeedBack/FeedbackForm";
import Review from "./Review";


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
        <div className="container">
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-10">
            
            <div>
            {
             collages.map(collage => <MyCollegeCard key={collage._id} collage={collage} />)   
            }
            </div>
            <div>
            <Review  collages={collages} />  
            
            </div>
            </div>
            
        </div>
    );
};

export default MyCollege;