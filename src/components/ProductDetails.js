import React from 'react';
import useCharacters from '../Graphql/useCharacters';
import { useParams } from 'react-router-dom';
import CardDetails from './cardDetails';
import Header from './navbar/Header';

const ProductDetails = () => {

  const { error, data, loading } = useCharacters();
  const { id } = useParams();
  const productDetail = data?.categories[0].products.filter((item) => item.id === id);

  if (loading) return <div>Speinner....</div>
  if (error) return <div>SOmething wrong happened</div>

  return (
    <div className="product-details">
      <Header />
      {productDetail.map( item => (
        <div key={item.id}>
          <CardDetails
            images={item.gallery}
            prices={item.prices}
            itemDetails={item}
            itemName={item.name}
            brand={item.brand}
            attributes={item.attributes}
            descript={item.description}
          />
        </div>
      ))}
    </div>
  )
};

export default ProductDetails;
