import React, { useState } from 'react';

const CardDetails = ({images}) => {
    
  const [selectImage, setSelectImage] = useState([])

  return (
    <>
    <div className="img_side">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="image_caption"
          onClick={() => setSelectImage(image)} />
      ))}
    </div><div className="img-selected">
        {(selectImage.length === 0) ?
          <img src={images[0]} alt="img_init" /> :
          <img src={selectImage} alt="img_product" />
        }
      </div><div className="card-details">
        notihng Yet
      </div>
    </>
  )
}

export default CardDetails