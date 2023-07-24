import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ProfileUpdate = ({ userInfo, setUserInfo }) => {
  const { _id, name, photo } = userInfo;
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    fetch(`${import.meta.env.VITE_URL}/users/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire(
            'Good job!',
            'Your data update is complete!',
            'success'
          );
          reset();

          // Fetch updated user data after successful update
          fetch(`${import.meta.env.VITE_URL}/users/${userInfo.email}`)
            .then(res => res.json())
            .then(data => {
              setUserInfo(data);
            })
            .catch(error => {
              console.log(error.message);
            });
        } else {
          Swal.fire(
            'Have you changed any data?',
            'Please change some data and then click the button',
            'question'
          );
        }
      })
      .catch((error) => {
        console.error('Error occurred during the PUT request:', error);
        Swal.fire({
          icon: 'error',
          title: 'Failed to update information',
          text: 'An error occurred while updating the information.',
        });
      });
  };

  return (
    <>
      <div className='p-10 bg-sky-900'>
        <div className='card-body'>
          <h1 className='text-white font-semibold text-center text-2xl'>Update Your Information!</h1>
          <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input defaultValue={name} type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered w-full" />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Photo Url</span>
              </label>
              <input defaultValue={photo} type="url" {...register("photo", { required: true })} name="photo" placeholder="Photo URL" className="input input-bordered" />
            </div>

            <div className="form-control mt-6">
              <input type='submit' className="btn btn-block btn-primary" value={'Update Now'} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdate;
