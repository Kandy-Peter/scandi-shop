import React from 'react';
import useCharacters from '../Graphql/useCharacters';
import { useParams } from 'react-router-dom';
import CardDetails from './cardDetails';

const ProductDetails = () => {

  const { error, data, loading } = useCharacters();
  const { id } = useParams();
  const productDetail = data?.categories[0].products.filter((item) => item.id === id);

  if (loading) return <div>Speinner....</div>
  if (error) return <div>SOmething wrong happened</div>

  return (
    <div className="product-details">
      {productDetail.map( item => (
        <div className="item-row" key={item.id}>
          <CardDetails
            images={item.gallery}
            prices={item.prices}
            itemDetails={item}
            itemName={item.name}
            brand={item.brand}
            descript={item.description}
          />
        </div>
      ))}
    </div>
  )
};

export default ProductDetails;
