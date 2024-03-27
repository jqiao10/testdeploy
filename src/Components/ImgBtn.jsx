import React from "react";
import ImageUploading from 'react-images-uploading';


function ImgBtn(){
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
  
    const onChange = (imageList, addUpdateIndex) => {
      // data for submit
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
  
    return (
      <div>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div class="flex flex-col justify-between h-full">
            <button
              className="rounded-full ring ring-cyan-500 bg-cyan-500 text-white text-xl hover:ring-cyan-800 px-5 py-3 mb-10 mt-5 self-center"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}>
              Click or Drop here
            </button>
          
            <div>
              {imageList.map((image, index) => (
                <div key={index} className="image-item mb-4 flex justify-center">
                  <img src={image['data_url']} alt="" width="100" />
                  <div className="image-item__btn-wrapper flex justify-around w-full">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          
            <button
              className="rounded-full ring ring-cyan-500 bg-cyan-500 text-white text-xl hover:ring-cyan-800 px-5 py-3 mt-10 self-center"
              onClick={onImageRemoveAll}>
              Remove all images
            </button>
          </div>
          )}
        </ImageUploading>
      </div>
    );
  }
export default ImgBtn;