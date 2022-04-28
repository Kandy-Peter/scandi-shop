import React from 'react';
import { Link } from 'react-router-dom';
import useCharacters from '../Graphql/useCharacters';

const Products = () => {

  const { error, data, loading } = useCharacters();

  if (loading) return <div>Speinner....</div>
  if (error) return <div>SOmething wrong happened</div>

  return (
    <div className="products">
      {data.categories[0].products.map( item => (
        <Link to={`product/${item.id}`} key={item.id}>
          <div className="card-row">
              <img src={item.gallery[0]} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.prices[0].currency.symbol}{item.prices[0].amount}</p>
            </div>
        </Link>
      ))}
    </div>
  )
}

export default Products