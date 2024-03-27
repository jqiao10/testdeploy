

function ConfirmationModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-5 rounded-lg">
          <p className="mb-4">Are you sure you want to quit?</p>
          <button onClick={onConfirm} className="mr-2 px-5 py-2 bg-red-500 text-white rounded">Yes</button>
          <button onClick={onClose} className="px-5 py-2 bg-gray-200 text-black rounded">No</button>
        </div>
      </div>
    );
  }
  export default ConfirmationModal;