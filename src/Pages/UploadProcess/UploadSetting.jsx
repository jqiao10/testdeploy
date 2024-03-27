import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {iconMap} from '../../info/icons';
import ImgBtn from '../../Components/ImgBtn';
import NormalBtn from '../../Components/NormalBtn';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function UploadSetting() {
    const { id } = useParams();
    const [property, setProperty] = useState(null); 

    useEffect(() => {
        fetch(`http://localhost:3001/property`)
            .then(response => response.json())
            .then(data => {
                setProperty(data);
                console.log(data); 
            })
            .catch(error => console.error('Error:', error));
    }, [id]);

    if (!property) {
        return <div>Loading...</div>;
    }
    // img order changing using beautifuldnd
    const onDragEnd = (result) => {
      if (!result.destination) {
          return; 
      }

      const reorderedImages = Array.from(property.images);
      const [removed] = reorderedImages.splice(result.source.index, 1);
      reorderedImages.splice(result.destination.index, 0, removed);

      setProperty({...property, images: reorderedImages});
  };
    return (
      <div className="flex justify-center">
      <form className="w-3/4">
          <h2 className="font-bold text-lg mb-4">Basic Information</h2>
          <div className="mb-3">
              <label className="font-bold">Title:</label>
              <input
                  type="text"
                  id="title"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={property.find(p => p.id == id)?.title || 'Title not found'}
              />
          </div>
          <div className="mb-3">
              <label className="font-bold">Living Rooms:</label>
              <input
                  type="number"
                  id="livingRooms"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={property.find(p => p.id == id)?.basicInformation.livingroom}
              />
          </div>
  
          <div className="mb-3">
              <label className="font-bold">Kitchen:</label>
              <input
                  type="number"
                  id="kitchen"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={property.find(p => p.id == id)?.basicInformation.kitchen}
              />
          </div>
          
          <div className="mb-3">
              <label className="font-bold">Bathroom:</label>
              <input
                  type="number"
                  id="bathroom"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={property.find(p => p.id == id)?.basicInformation.bathroom}
              />
          </div>
  
          <div className="mb-3">
              <label className="font-bold">Bedroom:</label>
              <input
                  type="number"
                  id="bedroom"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={property.find(p => p.id == id)?.basicInformation.bedroom}
              />
          </div>
          
          <div className="mb-3">
              <label className="font-bold">Guests:</label>
              <input
                  type="number"
                  id="guests"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={property.find(p => p.id == id)?.basicInformation.guests}
              />
          </div>

{/* need to change  */}
          <h2 className="font-bold text-lg mb-4 mt-3">Property Features: </h2>
          <div className="grid grid-cols-3 gap-4 mt-1 block w-full border-gray-300 rounded-md shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    {property.find(p => p.id == id)?.features.map(feature => (
                        <div key={feature} className="flex items-center">
                            <span>{iconMap.find(i => i.name == feature)?.icon || 'icon not found'}</span>
                            <span className="ml-2">{feature}</span>
                        </div>
                    ))}
                </div>

                <h2 className="font-bold text-lg mb-4 mt-3">Property Amenities: </h2>
          <div className="grid grid-cols-3 gap-4 mt-1 block w-full border-gray-300 rounded-md shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    {property.find(p => p.id == id)?.amenities.map(amenities => (
                        <div key={amenities} className="flex items-center">
                            <span>{iconMap.find(i => i.name == amenities)?.icon || 'icon not found'}</span>
                            <span className="ml-2">{amenities}</span>
                        </div>
                    ))}
                </div>

                <h2 className="font-bold text-lg mb-4 mt-3">Property Safety: </h2>
          <div className="grid grid-cols-3 gap-4 mt-1 block w-full border-gray-300 rounded-md shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    {property.find(p => p.id == id)?.safety.map(safety => (
                        <div key={safety} className="flex items-center">
                            <span>{iconMap.find(i => i.name == safety)?.icon || 'icon not found'}</span>
                            <span className="ml-2">{safety}</span>
                        </div>
                    ))}
                </div>
            
                <h2 className="font-bold text-lg mb-4 mt-3">property Description: </h2>
                <div className="mb-3 mt-3">
              <label className="font-bold">Description:</label>
              <textarea
                  type="text"
                  id="guests"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-20"
                  value={property.find(p => p.id == id)?.description}
              />
          </div> 
          <div className="mb-3 mt-3">
              <label className="font-bold">Cleaning Instruction:</label>
              <textarea
                  type="text"
                  id="guests"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-h-20"
                  value={property.find(p => p.id == id)?.cleaning}
              />
          </div> 
      
          <div className="mb-3 mt-3">
          <label className="font-bold">Property Image:</label>
          <div className="flex items-center gap-5 overflow-auto shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            {property.find(p=> p.id == id)?.propertyImg.map((imgSrc, index) => (
              <img key={index} src={imgSrc} alt={`Property ${property.id} Image ${index + 1}`} className="mb-3 mt-3 block w-1/4 h-40 w-auto "/>
            ))}
            <br/>
            {/* add new button with remove button on img + drag and*/}
            
            </div>
          </div>
{/* cannot change for address, new house th */}
          <h2 className="font-bold text-lg mb-4 mt-3">Price Information: </h2>
          <div className="mb-3">
              <label className="font-bold">Week day price</label>
              <input
                  type="number"
                  id="addressLine1"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={property.find(p => p.id == id)?.weekdayPrice}
              />
          </div>

          <div className="mb-3">
              <label className="font-bold">Weekend / Holiday Price</label>
              <input
                  type="number"
                  id="addressLine2"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={property.find(p => p.id == id)?.weekendPrice}
              />
          </div>

          <div className="mb-3">
              <label className="font-bold">Start Date</label>
              <input
                  type="date"
                  id="addressLine2"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={property.find(p => p.id == id)?.startDate}
              />
          </div>

          <div className="mb-3">
              <label className="font-bold">End Date</label>
              <input
                  type="date"
                  id="addressLine2"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={property.find(p => p.id == id)?.endDate}
              />
          </div>
          <div className="text-center mt-5 flex justify-center space-x-20 gap-20 mb-10">
      <NormalBtn href="/"className="pr-10">Save</NormalBtn>
      <NormalBtn href="/" className='ml-10'>Cancel</NormalBtn>
      </div>
      </form>
      
    
  


  </div>
    );
}

export default UploadSetting;