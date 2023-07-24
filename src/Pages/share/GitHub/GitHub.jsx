import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../../hooks/useAuth';
import { FaGithub } from 'react-icons/fa';

const GitHub = () => {
    const { githubLogin } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.path || '/'
    const handleGithubLogin = () => {
        githubLogin()
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
                        Swal.fire('User login successfully')
                        navigate(from, { replace: true })
                    })
            })
    }
    return (
        <>

            <button onClick={handleGithubLogin} className="btn btn-block btn-outline btn-success"><FaGithub size={30}></FaGithub></button>
        </>

    );
};

export default GitHub;