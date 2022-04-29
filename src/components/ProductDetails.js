import React from 'react';
import useCharacters from '../Graphql/useCharacters';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

  const { error, data, loading } = useCharacters();

  const { id } = useParams();
  const productDetail = data?.categories[0].products.filter((item) => item.id === id);
  console.log(productDetail)

  if (loading) return <div>Speinner....</div>
  if (error) return <div>SOmething wrong happened</div>

  return (
    <div className="product-details">
      {productDetail.map( item => (
        <div className="item-row" key={item.id}>
          <div className="img_side">
            {item.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={item.name}
              />
            ))}
          </div>
          <div className="img-selected">
            <img src="" alt="img_product" />
          </div>
          <div className="card-details">
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductDetails;
