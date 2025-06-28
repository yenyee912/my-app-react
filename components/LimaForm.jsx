"use client"

import { useRef, useState } from 'react'

function BigForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    email: ""
  })

  function handleFormDataChange(e) {
    const { key, value } = e.target // extract value of the specific key
    setFormData(prev => ({
      ...prev, // copy the other keys which might be passed before
      [key]: value // bind the key of the 3 props to value
    }))
  }

  return (
    <form className="space-y-4 mt-2">
      <input
        type="text"
        name="name"
        value={formData.name} // can straight use formData obj
        onChange={handleFormDataChange}
        placeholder="Name"
        className="border p-2"
      />
      <input
        type="number"
        name="age"
        value={formData.age} // can straight use formData obj
        onChange={handleFormDataChange}
        placeholder="Age"
        className="border p-2 mx-2"
      />
      <input
        type="email"
        name="email"
        value={formData.email} // can straight use formData obj
        onChange={handleFormDataChange}
        placeholder="Enter email address with valid domain"
        className="border p-2 w-[35ch]"
        size="30"
      />
    </form>
  )
}

export function PictureActive() {
  const [isActive, setIsActive] = useState(false)

  function handlePictureActivity(e) {
    e.stopPropagation();
    console.log("click here")
    setIsActive(!isActive)
  }

  return (
    <div className={`background ${isActive ? "background--active" : ""}`} >
      <img
        onClick={handlePictureActivity}
        className={`picture ${isActive ? "" : "picture--active"}`}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}


export default function LimaForm() {

  const [answer, setAnswer] = useState('') // if use let answer='' --> the textarea will not change
  const [status, setStatus] = useState('typing'); // 'typing' | 'submitting' | 'success'
  const [error, setError] = useState(null) // error obj, not just simply string

  if (status === 'success') {
    return <h1 className='text-green-500 text-4xl bold'>That's right!</h1>
  }

  function submitForm(answer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let checkResult = answer.toLowerCase() !== 'lima'

        if (checkResult) { // throw error only= true(wrong condition)
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve();
        }
      }, 1500); // Pretend it's hitting the network.
    });
  }


  //Without these, React will show an error like answer is not defined.
  async function handleFormSubmit(e) {
    e.preventDefault();
    setStatus('submitting'); // disabled the button and textarea
    setError(null) // clean up previous error

    try {
      await submitForm(answer); // or the setTimeout logic can straight write here
      setStatus('success');
    }

    catch (err) {
      setStatus('typing');
      setAnswer("")
      setError(err);
    }
  }

  // handler for setState
  function handleTextAreaChange(e) {
    setAnswer(e.target.value)
  }


  // the value of textarea is bind to a dead props, answer
  // you need to use the fcking setter to feedback to the var itself
  // kinda like v-model in vue, so if you no use the setter, the value stuck at initial value

  // for data you want to track reactively, like the v-model in vue, need to do useState and provide a handler function to track change
  // if not using useState, the field is just read-only
  return (
    <>
      <h5>City Quiz</h5>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <textarea className='border border-red-300' value={answer} onChange={handleTextAreaChange} disabled={status === 'submitting'}></textarea>
      <br></br>
      <button disabled={answer.length === 0 || status === 'submitting'} onClick={handleFormSubmit} className="bg-blue-700 hover:bg-blue-800 text-white px-2 mt-2 disabled:text-gray-500 focus:ring-4" >Submit</button>

      <p>Status: {status}</p>
      {/* in react cannot cincai render, for obj, must make sure got props */}
      {error && <p className="text-red-500">Error: {error.message || error.toString()}</p>}
      <p>Answer: {answer}</p>


      <hr></hr>
      <h1 className="text-4xl font-bold">Big Form</h1>
      <BigForm></BigForm>

      <PictureActive></PictureActive>


    </>
  )

}