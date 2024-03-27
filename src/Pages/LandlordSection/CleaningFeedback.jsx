import React, { useEffect, useState } from "react";

function CleaningFeedback() {
  const [service, setService] = useState([]);

  const handleApprove = (id) => {
    console.log(`Cleaning service ${id} approved!`);
  };

  const handleDeny = (id) => {
    console.log(`Cleaning service ${id} denied!`);
  };
  useEffect(() => {
    fetch("http://localhost:3001/cleaningService")
      .then(response => response.json()) 
      .then(data => {
        setService(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []); 

  return (
    <div className="grid grid-cols-3 gap-4 mt-1 block w-full">
      {service.length > 0 ? (
        service.map((s) => (
          <div key={s.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{s.houseTitle}</div>
              {s.cleaningImg.map((imgSrc, index) => (
                <img key={index} className="w-full mb-4" src={imgSrc} alt={`Cleaning ${s.houseTitle}`} />
              ))}
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between">
              <button
                onClick={() => handleApprove(s.id)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                ✓ Approve
              </button>
              <button
                onClick={() => handleDeny(s.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                ✕ Deny
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading services...</p> 
      )}
    </div>
  );
}

export default CleaningFeedback;