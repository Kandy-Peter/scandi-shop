import React, { useState } from 'react';
import parse from 'html-react-parser';

const CardDetails = (details) => {
  let {images,
        itemName,
        brand,
        descript,
        isInStock,
        attributes,
        prices,
      } = details;

  const [selectImage, setSelectImage] = useState([])

  return (
    <>
      <div className="img_side">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="image_caption"
            onClick={() => setSelectImage(image)}
          />
        ))}
      </div>
      <div className="img-selected">
        {(selectImage.length === 0) ?
          <img src={images[0]} alt="img_init" /> :
          <img src={selectImage} alt="img_product" />
        }
      </div>
      <div className="card-details">
        <h3>{itemName}</h3>
        <h5>{brand}</h5>
        <div className="size-clm">
          
        </div>
        <div className="color-clm">
          <p className="type_name">COLOR:</p>
          <div className="colors">
            <span className="grey">1</span>
            <span className="black">2</span>
            <span className="green">3</span>
          </div>
        </div>
        <div>
          <p className="type_name">PRICE:</p>
          {prices?.map(price => (
            <span key={Math.random() * 10}>{price.currency.symbol}{price.amount}</span>
          ))}
        </div>
        <button>ADD TO CART</button>
        <p>{parse(`${descript}`)}</p>
      </div>
    </>
  )
}

export default CardDetails