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
    <div className="item-row">
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
        <div className="attributes-clm">
            {attributes.map(item => (
              <div className="attr_container">
                <h6>{item.name}:</h6>
                <div>{item.name === "Color" ? (
                  <ul>{item.items.map(size => (
                    <li
                    style={{
                      backgroundColor: size.value,
                      width: "35px",
                      height: "35px",
                      marginRight: "0.7rem",
                      marginBottom: "1rem"
                    }}
                    className="color-box"
                    >.</li>
                  ))}</ul>
                ) : (
                  <ul>{item.items.map(size => (
                    <li className="size-box">{size.value}</li>
                  ))}</ul>
                )}</div>
              </div>
            ))}
        </div>
        <div className="price">
          <h6>PRICE:</h6>
          <span key={Math.random() * 10}>{prices[0].currency.symbol}{prices[0].amount}</span>
        </div>
        <button>ADD TO CART</button>
        <p className="prod_description">{parse(`${descript}`)}</p>
      </div>
    </div>
  )
}

export default CardDetails