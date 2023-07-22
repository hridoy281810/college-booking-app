
import { useForm } from 'react-hook-form';
import { imageUpload } from '../../hooks/imageUpload';
import Swal from 'sweetalert2';
import { myCollage } from '../../hooks/usePostCollege';
const AdmissionCard = ({collage}) => {
    const {_id,rating,research_number,admission_dates,college_image,college_name, events,research_history,sports,admission_process,events_details,research_works,sports_categories} = collage
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
// name,subject,email,phoneNumber,  address,dateOfBirth,image
const onSubmit = (data) => {
    const { image, ...collegeData } = data;
    imageUpload(image[0])
      .then((uploadedImage) => {
        const classDataWithImage = {
          ...collegeData,
          image: uploadedImage.data.url,college_name:college_name,rating:rating,
          research_number:research_number,admission_dates:admission_dates,
          research_history:research_history,college_image:college_image,events:events,
          events_details:events_details,admission_process:admission_process,sports:sports,sports_categories:sports_categories,sports_categories:sports_categories,collegeId:_id,
        };
        // console.log(classDataWithImage);
        myCollage(classDataWithImage)
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
            // Handle other responses or error cases
            console.log(data); // Debugging purpose
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
      })
      .catch((error) => {
        console.error('Error occurred during image upload:', error);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Failed to upload image',
          text: 'An error occurred while uploading the image.',
          showConfirmButton: false,
          timer: 1500
        });
      });
  };
  
    return (
        <div>
            <div className="collapse bg-base-200 mb-5">
  <input type="checkbox" /> 
  <div className="collapse-title text-2xl font-medium">
   {college_name}
  </div>
  <div className="collapse-content"> 
  <form className='w-full' onSubmit={handleSubmit(onSubmit)} >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Candidate Name*</span>
            </label>
            <input type="text" {...register("candidateName", { required: true })} name="candidateName" placeholder="candidate name" className="input input-bordered w-full" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Candidate Email</span>
            </label>
            <input  type="text" {...register("email", { required: true })} name='email'  className="input input-bordered   w-[400]"/>
          </div>
          <div className='md:flex w-full gap-4'>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input  type="text"  {...register("subject", { required: true })} name='subject' className="input input-bordered  w-[400]" />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Candidate Phone number</span>
              </label>
              <input  type="number" {...register("phoneNumber", { required: true })} name="phoneNumber" placeholder="phone number" className="input input-bordered "  />
            </div>
          </div>
          <div className='md:flex gap-4 w-full'>
          
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">  Address</span>
              </label>
              <input type="text" {...register("  address", { required: true })} name="  address" placeholder=" address" className="input input-bordered w-[266]" />
            </div>
            <div className="form-control w-full">
  <label className="label">
    <span className="label-text">Date of Birth</span>
  </label>
  <input
    type="date"
    {...register("dateOfBirth", { required: true })}
    name="dateOfBirth"
    className="input input-bordered w-[266]"
  />
</div>


          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input type="file" {...register("image", { required: true })} name="image" placeholder="image" className="input input-bordered pt-2" />
          </div>
          <div className="form-control  mt-6">
            <input type='submit' className="btn btn-block btn-primary" value={'Add Now'} />
          </div>
        </form>
  </div>
</div>
        </div>
    );
};

export default AdmissionCard;