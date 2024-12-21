import React, { useState } from "react";

function InputForm({
  name,
  onNameChange,
  email,
  onEmailChange,
  feedback,
  onFeedbackChange,
  onSubmit,
}) {

  return (
    <>
    <h1 className='px-10 p-4 text-2xl text-white font-bold'>Feedback Form</h1>
      <div className="flex flex-col space-y-5 items-center p-10">
        <div className="flex flex-col w-[100%] space-y-2">
          <label htmlFor="" className="text-white">
            Name
          </label>
          <input 
          className="p-2 rounded-md outline-none" 
          type="name"
          value={name}
          onChange={onNameChange}
          />
        </div>
        <div className="flex flex-col w-[100%] space-y-2">
          <label htmlFor="" className="text-white">
            Email
          </label>
          <input 
          className="p-2 rounded-md outline-none" 
          type="email"
          value={email}
          onChange={onEmailChange}
          />
        </div>

        <div className="flex flex-col w-[100%] space-y-2">
          <label htmlFor="" className="text-white">
            Feedback
          </label>
          <textarea
          value={feedback}
          onChange={onFeedbackChange}
          name="feedback-message"
          className="p-2 resize-none rounded-md h-[200px] outline-none"
        ></textarea>
        </div>

        <button 
        className="bg-white w-[100%] rounded-md py-2 text-blue-900 font-semibold text-lg hover:bg-slate-500 hover:text-white"
        onClick={onSubmit}>Submit</button>
      </div>
    </>
  );
}

export default InputForm;
