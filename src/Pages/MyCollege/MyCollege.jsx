import { useEffect, useState } from "react";
import MyCollegeCard from "./MyCollegecard";
import Review from "./Review";
import HeadingLine from "../../components/Header/HeadingLine";
import Loading from "../share/Loader/Loading";


const MyCollege = () => {
    const [collages, setCollage] = useState([])
  const [loading,setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch(`${import.meta.env.VITE_URL}/myCollege`)
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
       <div className="background-img">
         <div className="container mt-8">
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-10">

                <div>
                    <HeadingLine title={'The information of all the colleges you have edited is given here'} heading={'My College'} />
                    {
                        collages.map(collage => <MyCollegeCard key={collage._id} collage={collage} />)
                    }
                </div>
                <div>
                    <Review />

                </div>
            </div>

        </div>
       </div>
    );
};

export default MyCollege;