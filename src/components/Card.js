import React from 'react';
import { Link } from 'react-router-dom';
import AddCardIcon from '../images/Circle_Icon.svg'

const Card = ({ id, name, isInStock, image, prices, amount}) => {
  return (
    <Link to={`product/${id}`} key={id} className="item">
      <p className="in-stock-text" style={{ display: isInStock ? "block" : "none" }}>OUT OF STOCK</p>
      <div className="card-row"
        style={{ opacity: isInStock ? 0.6 : 1 }}
      >
        <img src={image} alt={name} className="item-image"/>
        <div className="item_descript">
          <p>{name}</p>
          <p>{prices}{amount}</p>
          <img src={AddCardIcon} alt="card_icon" className="card-btn" />
        </div>
      </div>
    </Link>
  )
}

export default Card