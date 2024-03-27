import React, { useState } from "react";
import ConfirmationModal from '../../Components/ConfirmationModal';

function UploadTitle() {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Add this line

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value.length <= 100) {
      setTitle(value);
      setError(''); 
    } else {
      setError('Title can only be a maximum of 100 characters long.');
    }
  };

  const handleNextButtonClick = () => {
    if (title.trim() === '') {
      setError('Please enter a title.');
      // Prevent navigation if needed
      return; // You might want to prevent navigation here
    }
    // Navigate to the next page if title is not empty
    window.location.href = "/uploadlisting/info"; // Adjust navigation as needed
  };
  const handleBackButtonClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleConfirmQuit = () => {
    window.location.href = "/"; // Adjust to your back navigation URL
  };
  return (
    <div>
      <div className="mt-5 pt-5">
        <h1 className="text-2xl text-center mt-1 mb-5">Give property A title</h1>
        <p className="text-center mr-5 ml-5">
          Please give an attractively summarize the property's main features and appeal to potential renters, making it stand out among numerous listings.
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>
      <br />
      <div className="flex justify-center items-center mt-5">
        <input
          className="placeholder:text-slate-400 block bg-white w-4/6 min-w-24 text-center border border-cyan-500 rounded-md py-3 focus:ring text-xl"
          placeholder="Enter a title for property ..."
          type="text"
          name="search"
          value={title} 
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div>
      <div className="text-center mt-5 flex justify-center space-x-20 gap-20">
        <button onClick={handleBackButtonClick} className="rounded-full ring ring-cyan-500 bg-cyan-500 text-white text-xl hover:ring-cyan-800 px-5 py-3">Back</button> {/* Modified */}
        <button onClick={handleNextButtonClick} className="rounded-full ring ring-cyan-500 bg-cyan-500 text-white text-xl hover:ring-cyan-800 px-5 py-3">
          Next
        </button>
      </div>
        <ConfirmationModal isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmQuit} />
      </div>
    </div>
  );
}

export default UploadTitle;
