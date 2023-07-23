

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const ResetPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { passwordReset } = useAuth();
  const [error, setError] = useState('');

  const onSubmit = data => {
    passwordReset(data.email)
      .then(() => {
        Swal.fire('Password reset email sent successfully');
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <>
      <div className="flex justify-center md:pt-28">
        <div className="shadow-2xl bg-base-100 flex-shrink-0 w-full max-w-sm rounded-2xl">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && <span className='text-red-600'>This field is required</span>}
              </div>
              <p className='text-red-700 label-text-alt mt-2'>{error}</p>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value={'Reset Password'} />
              </div>
              <div className="mt-2 text-center">
                <Link to="/login" className="link link-hover">
                  Back to Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
