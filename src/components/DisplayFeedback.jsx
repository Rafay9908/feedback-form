import React from 'react';

function DisplayFeedback({ name, email, feedback }) {
  // Check if any feedback has been submitted
  if (!name || !email || !feedback) {
    return <p className="text-white p-10">No feedback submitted yet.</p>;
  }

  return (
    <>
      <h1 className='px-10 p-4 text-2xl text-white font-bold'>Submitted Feedback</h1>
      <div className='space-y-5 p-10'>
        <p className='text-white'>Name: <span className='font-semibold'>{name}</span></p>
        <p className='text-white'>Email: <span className='font-semibold'>{email}</span></p>
        <p className='text-white'>Feedback: <span className='font-semibold'>{feedback}</span></p>
      </div>
    </>
  );
}

export default DisplayFeedback;
