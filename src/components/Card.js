import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, name, image, prices, amount}) => {
  return (
    <Link to={`product/${id}`} key={id}>
          <div className="card-row">
              <img src={image} alt={name} />
              <h3>{name}</h3>
              <p>{prices}{amount}</p>
          </div>
    </Link>
  )
}

export default Card