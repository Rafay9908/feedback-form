import { useState } from 'react'
import InputForm from './components/InputForm'
import DisplayFeedback from './components/DisplayFeedback'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();

    setSubmittedFeedback({ name, email, feedback });
    // Clear the input fields
    setName('');
    setEmail('');
    setFeedback('');
  }
  console.log(submittedFeedback);

  return (
    <>
    <div className='bg-blue-900 w-[80%] mx-auto'>
    <InputForm 
    name={name}
    email={email}
    feedback={feedback}
    onNameChange={handleNameChange}
    onEmailChange={handleEmailChange}
    onFeedbackChange={handleFeedbackChange}
    onSubmit={handleClick}
    />
    {submittedFeedback &&  <DisplayFeedback {...submittedFeedback} />}
    </div>
    </>
  )
}

export default App
