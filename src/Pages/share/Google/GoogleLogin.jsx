import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';

const GoogleLogin = () => {
    const { googleLogin, user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.path || '/'
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                const saveUser = { name: loggedUser?.displayName, email: loggedUser?.email, photo: loggedUser?.photoURL }
                fetch(`${import.meta.env.VITE_URL}/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User login successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                        navigate(from, { replace: true })
                    })
            })
    }
    return (
        <>

            <button onClick={handleGoogleLogin} className="btn btn-block btn-outline btn-success"><FcGoogle size={30}></FcGoogle></button>
        </>

    );
};

export default GoogleLogin;