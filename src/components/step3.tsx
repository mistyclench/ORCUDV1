import React from 'react';
interface Props {
  handleSubmit: () => void;
  handlePrev: () => void;
}
const Step3 = ({ handleSubmit, handlePrev }:Props) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 3</h2>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
        Phone:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="phone"
        type="tel"
        name="phone"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
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

export default Step3;