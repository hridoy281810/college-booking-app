import React, { useState } from 'react';
import { userFeedback } from '../../../hooks/userFeedback';
import HeadingLine from '../../../components/Header/HeadingLine';
import { Zoom } from 'react-reveal';
const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    collegeName: '',
    email: '',
    comment: '',
    ratting: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const collegeName = form.collegeName.value;
    const ratting = form.ratting.value;
    const comment = form.comment.value;

    const feedbackData = {
      name,
      email,
      collegeName,
      ratting,
      comment,
    };

    userFeedback(feedbackData)
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
    setSubmitted(true);
  };

  return (
    <div className="container py-10 ">
      <HeadingLine title={'Please give your valuable feedback!'} heading={'Feedback Form'} />
      {submitted ? (
        <div className=" p-4 rounded-lg ">
          <p className="text-green-800">Thank you for your feedback!</p>
        </div>
      ) : (
        <Zoom>

        <form onSubmit={handleSubmit} className="bg-sky-900 p-6 shadow-lg rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block  text-white  font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={feedback.name}
              placeholder='name'
              onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block  text-white  font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='email'
              value={feedback.email}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className='md:inline-flex  gap-4 w-full'>
            <div className="mb-4">
              <label htmlFor="name" className="block  text-white  font-semibold">
                College Name: </label>
              <input type="text"    placeholder='college name' id="name" name="collegeName" value={feedback.collegeName} onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block  text-white  font-semibold">
                Rating: </label>
              <input type="number"    placeholder='rating' id="ratting" name="ratting" value={feedback.ratting} onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block  text-white  font-semibold">
              Comment:
            </label>
            <textarea
              id="comment"
              name="comment"
              placeholder='write your comment'
              value={feedback.comment}
              onChange={handleChange}
              rows={4}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Submit Feedback
          </button>
        </form>
        </Zoom>
      )}
    </div>
  );
};

export default FeedbackForm;
