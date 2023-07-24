
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { myReview } from '../../hooks/usePostCollege';
import useAuth from '../../hooks/useAuth';
const Review = () => {
  const { user } = useAuth()
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    if (user) {
      myReview(data)
        .then(data => {
          if (data.insertedId) {
            reset();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'College added successfully',
              showConfirmButton: false,
              timer: 1500
            });
          } else {
            console.log(data);
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Failed to add college',
              text: 'An error occurred while adding the college.',
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        .catch((error) => {
          console.error('Error occurred during the POST request:', error);
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Failed to add college',
            text: 'An error occurred while adding the college.',
            showConfirmButton: false,
            timer: 1500
          });
        });

    }
    else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Failed to add college',
        text: 'please login',
        showConfirmButton: false,
        timer: 1500
      });
    }

  };

  return (
    <>

      <div className='p-10 bg-sky-900   '>
        <div className='card-body'>
          <h1 className='text-white font-semibold text-center text-2xl'>Please Review Now!</h1>
          <form className='w-full ' onSubmit={handleSubmit(onSubmit)} >
            <div className="form-control text-white">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input type="text" {...register("candidateName", { required: true })} name="candidateName" placeholder="candidate name" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <label className="label ">
                <span className="label-text text-white">Email</span>
              </label>
              <input type="text" {...register("email", { required: true })} name='email' className="input input-bordered   w-[400]" />
            </div>
            <div className='md:flex sm:flex-col w-full gap-4'>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white">Collage Name</span>
                </label>
                <input type="text"  {...register("subject", { required: true })} name='subject' className="input input-bordered  w-[400]" />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-white">Rating</span>
                </label>
                <input type="number" {...register("rating", { required: true })} name="rating" placeholder="rating" className="input input-bordered " />
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Photo Url</span>
              </label>
              <input type="url" {...register("url", { required: true })} name="url" placeholder="url" className="input input-bordered " />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Comment</span>
              </label>
              <textarea type="text" {...register("comment", { required: true })} name="comment" placeholder="Write Now" className="input input-bordered " />
            </div>

            <div className="form-control  mt-6">
              <input type='submit' className="btn btn-block btn-primary" value={'Review Now'} />
            </div>
          </form>
        </div>
      </div>
    </>

  );
};

export default Review;