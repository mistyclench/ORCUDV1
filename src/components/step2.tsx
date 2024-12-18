import React from 'react';

const Step2: React.FC<{ handleNext: () => void; handlePrev: () => void; handleInputChange: React.ChangeEventHandler<HTMLInputElement> }> = ({ handleNext, handlePrev, handleInputChange }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 2</h2>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        name="email"
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleNext}
      >
        Next
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handlePrev}
      >
        Previous
      </button>
    </div>
  );
};

export default Step2;