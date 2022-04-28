import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../../Graphql/data'

const Products = () => {
    const { error, data, loading } = useQuery(GET_PRODUCTS)
    console.log({ error, data, loading });
  return (
    <div>Products</div>
  )
}

export default Products