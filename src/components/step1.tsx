import React from 'react';
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Step1: React.FC<{ handleNext: () => void; handleInputChange: React.ChangeEventHandler<HTMLInputElement> }> = ({ handleNext, handleInputChange }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 1</h2>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        name="name"
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Step1;