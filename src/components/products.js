import React from 'react';
import useCharacters from '../Graphql/useCharacters';
import Card from './Card';

const Products = () => {

  const { error, data, loading } = useCharacters();

  if (loading) return <div>Speinner....</div>;
  if (error) return <div>SOmething wrong happened</div>;

  return (
    <div className="products-cards">
      {data.categories[0].products.map( item => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          image = {item.gallery[0]}
          prices = {item.prices[0].currency.symbol}
          amount = {item.prices[0].amount}
        />
      ))}
    </div>
  )
}

export default Products