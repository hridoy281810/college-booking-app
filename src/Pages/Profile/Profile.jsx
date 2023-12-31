import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import ProfileUpdate from './ProfileUpdate';
import Loading from '../share/Loader/Loading';

const Profile = () => {
  const { user } = useAuth();
  console.log(user)
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_URL}/users/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUserInfo(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error.message);
        setLoading(true);
      });
  }, [user?.email]);

  return (
    <div className='background-img'>
      <div className="container">
      
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-10">
            <div>
              <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
                {user.photoURL ? (
                  <img src={user?.photoURL} alt="user" className="w-56 h-56 rounded-full mb-4" />
                ) : (
                  <img src={userInfo?.photo} alt="user" className="w-56 h-56 rounded-full mb-4" />
                )}
                <h3 className="text-3xl font-semibold mb-2">{userInfo?.name}</h3>
                <h3 className="text-xl font-semibold mb-2">{userInfo?.email}</h3>
              </div>
            </div>
            <div>
              <ProfileUpdate userInfo={userInfo} setUserInfo={setUserInfo} />
            </div>
          </div>
  
      </div>
    </div>
  );
};

export default Profile;
