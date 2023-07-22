import React, { useState } from 'react';
import { userFeedback } from '../../../hooks/userFeedback';

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
    <div className="container py-10">
      <h2 className="text-3xl font-bold mb-8">Feedback Form</h2>
      {submitted ? (
        <div className="bg-green-200 p-4 rounded-lg">
          <p className="text-green-800">Thank you for your feedback!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={feedback.name}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={feedback.email}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className='md:inline-flex  gap-4 w-full'>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              College Name: </label>
            <input type="text" id="name" name="collegeName"  value={feedback.collegeName} onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Ratting: </label>
            <input type="number" id="ratting" name="ratting"  value={feedback.ratting} onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-gray-700 font-semibold">
              Comment:
            </label>
            <textarea
              id="comment"
              name="comment"
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
      )}
    </div>
  );
};

export default FeedbackForm;
