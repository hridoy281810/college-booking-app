import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FaGraduationCap, FaSearch } from 'react-icons/fa';
import axios from 'axios';

const NavBar = () => {
  const {user,logOut} = useAuth()
  const [userInfo, setUserInfo] = useState({});
  const [searchResult,setSearchResult] = useState([])
  const [key, setKey] = useState('')
  
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/users/${user?.email}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setUserInfo(data);
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  }, [user?.email]);
useEffect(()=>{
  const search = async ()=>{
  if(!key.trim()){
   setSearchResult([])
    return
  }
    const res = await axios.get(`http://localhost:5000/colleges/${key}`, {params: {key: key, limit:1}})
    setSearchResult(res.data)
    console.log(res.data)
  }
  search()
},[key])

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => {
        console.log(error.message);
      });
  };
  // const handlekey = () => {
  //   fetch(`http://localhost:5000/college/${key}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setKey(data)
  //     })
  // }
const options = <>
<Link to='/'>Home</Link>
<Link to='/colleges'>Colleges</Link>
<Link to='/admission'>Admission</Link>
<Link to='/myCollege'>My Collage</Link>


</>
    return (
        <div className='bg-base-100  ' >
        <div className='container '>
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown z-10">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold ">
                  <img src={`logo`} className='w-28' alt="" />
                  {options}
                </ul>
              </div>
              <div className='md:inline-flex  justify-center items-center '>
               
                <FaGraduationCap className='text-[#ff7350]'  size={30}/>
                <Link to='/'><p className="text-[12px
      ] md:normal-case md:text-xl font-semibold md:font-bold text-[#ff7350]">  AcademiaPulse</p></Link>
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
       
              <ul className="menu menu-horizontal px-1  gap-4 font-semibold text-xl">
                {options}
              </ul>
            </div>
            <div className="navbar-end res-end">
          

      {
        user ? <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-outline ">
          <div className="rounded-full">
          {
                user && <> { userInfo?.name ? 
                  <div title={user?.displayName} > <h2
                  className=' cursor-pointer '  >{userInfo?.name} </h2>  </div>:<div title={user?.name} > <h2
                  className=' cursor-pointer '  >{userInfo?.name} </h2>  </div>
                }  </>
              }
              <div>
        {/* Add the password reset link */}
      
      </div>
          </div>
        </label>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          
          <li>
            <Link to={`/profile/${user?.email}`} className="justify-between">
              Profile
              <span className="badge">New</span>
            </Link>
          </li>
          
          <li>{
                user && <button onClick={handleLogOut} className="">Logout</button>
                  
              }</li>
              <li>  <Link to="/resetPassword">
          Reset Password
        </Link></li>
        </ul>
      </div>: <Link to='/login'><button className="btn-outline btn btn-success">Login</button></Link>
      }

           
            </div>
         
          </div>
          <from>
          <div className="form-control p-4 ">
          <div className='mb-4 flex justify-center items-center gap-2'>
          <input type="text"
           value={key}
           onChange={(e) => setKey(e.target.value)}
            placeholder="college name"
             className="input input-bordered input-secondary w-full max-w-xs" />{' '}<button  className="btn btn-outline btn-secondary"><FaSearch size={15} /></button>
        </div>
      </div>
      {
        searchResult && searchResult.length > 0 && (
    <div className='search-result'>
  {
    searchResult.map((college , i) => (
      <div key={i} className="card w-96 glass mb-8">
      <figure><img className='h-60 w-96' src={college?.college_image} alt="car!"/></figure>
      <div className="card-body">
        <h2 className="card-title">{college?.college_name}</h2>
       <p><strong>College Rating:</strong> {college?.rating}</p>
       <p><strong>Admission date:</strong> {college?.admission_dates}</p>
       <p><strong>Number of the research:</strong> {college?.research_number}</p>
       
      </div>
    </div>
    ))
  }
    </div>
        )
      }
      </from>
        </div>
      </div>
    );
};

export default NavBar;


