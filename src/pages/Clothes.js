import React from 'react';
import Header from '../components/navbar/Header';
import useCharacters from '../Graphql/useCharacters';
import Card from '../components/Card';

const Clothes = () => {
  const { error, data, loading } = useCharacters();

  if (loading) return <div>Speinner....</div>;
  if (error) return <div>SOmething wrong happened</div>;

  return (
    <div className="container">
      <Header />
      <div className="products-cards">
        {data.categories[1].products.map( item => (
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
    </div>
  )
}

export default Clothes;