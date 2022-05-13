import React from 'react'
import PlusSquare from '../../images/plus-square.svg'
import MinusSquare from '../../images/minus-square.svg'

const CartItem = ({images, itemName, brand, attributes, prices }) => {
  return (
    <div className="clart-item">
      <div className="cart-header">My Bag, items</div>
      <div className="bag-details">
        <div className="details">
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
        </div>
        <div className="count-btn">
          <img src={PlusSquare} alt="plus-square" />
          <span>0</span>
          <img src={MinusSquare} alt="minus-square" />
        </div>
        <div className="item-img">
          <img src={images[0]} alt="img_init" />
        </div>
      </div>
    </div>
  )
}

export default CartItem