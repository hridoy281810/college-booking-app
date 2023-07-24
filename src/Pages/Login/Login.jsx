import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import GoogleLogin from '../share/Google/GoogleLogin';
import GitHub from '../share/GitHub/GitHub';

const Login = () => {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const { login } = useAuth()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const onSubmit = data => {
    login(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        //
        Swal.fire('User login successfully')
        navigate(from, { replace: true });

      })
      .catch(error => {
        console.log(error)
        setError(error.message)
      })

  }
  return (
    <>
      <div className=" flex justify-center md:pt-28  ">
        <div className="shadow-2xl bg-base-100 flex-shrink-0 w-full max-w-sm rounded-2xl">
          <div className=" ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                {errors.email && <span className='text-red-600  '>This field is required</span>}
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true, minLength: 6, maxLength: 20,
                  pattern: /(?=.*[@$!%*#?&])(?=.*[A-Z]){6,}/
                })} name='password' placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password  must have one uppercase , one number and one special character</p>}

              </div>
              <p className='text-red-700 label-text-alt mt-2'>{error}</p>
              <div className="form-control mt-6">
                <input type='submit' className="btn btn-primary" value={'Login'} />
              </div>
              <div className="divider">Social Login</div>

              <GoogleLogin></GoogleLogin>
              <GitHub></GitHub>

              <p><small>New Hear? <Link to={'/registration'}>please Registration</Link></small></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;