function ConfirmDelete({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <p>Are you sure you want to delete?</p>
          <div className="flex justify-around mt-4">
            <button
              onClick={onConfirm}
              className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default ConfirmDelete
  