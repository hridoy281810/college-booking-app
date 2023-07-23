import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FaGraduationCap } from 'react-icons/fa';

const NavBar = () => {
  const {user,logOut} = useAuth()
  const [userInfo, setUserInfo] = useState({});

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

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => {
        console.log(error.message);
      });
  };

const options = <>
<Link to='/'>Home</Link>
<Link to='/colleges'>Colleges</Link>
<Link to='/admission'>Admission</Link>
<Link to='/myCollege'>My Collage</Link>


</>
    return (
        <div className='bg-base-100  ' >
        <div className='container px-0'>
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
                <img src='' className='w-16 md:w-28 lg:28 banner-p-hidden' alt="" />
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
            <div className="form-control mr-4">
 <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
</div>

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
        </ul>
      </div>: <Link to='/login'><button className="btn-outline btn btn-success">Login</button></Link>
      }

           
            </div>
          </div>
        </div>
      </div>
    );
};

export default NavBar;