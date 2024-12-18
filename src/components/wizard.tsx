"use client"
import { useState } from 'react';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

const Wizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Simulating a simple submission logic
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Error submitting form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form.');
    }
  };

//   async function handleSubmit (e: React.FormEvent<HTMLFormElement>){
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget)
//     const response = await fetch('/api/submit', {
//       method: 'POST',
//       body: formData,
//     })

//     // Handle response if necessary
//     const data = await response.json()
//     // ...
//      console.log(formData);
//      console.log(data);
//   };


  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Multistep Wizard</h1>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <Step1
            handleNext={handleNext}
            handleInputChange={handleInputChange}
          />
        )}
        {step === 2 && (
          <Step2
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleInputChange={handleInputChange}
          />
        )}
        {step === 3 && (
          <Step3
            handleSubmit={handleSubmit}
            handlePrev={handlePrev}
          />
        )}
      </form>
    </div>
  );
};

export default Wizard;
