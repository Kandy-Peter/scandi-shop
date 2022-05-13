import React from 'react';
import Header from '../components/navbar/Header'
import Products from '../components/products';

const Home = () => (
  <div className="container">
    <Header />
    <h2>All</h2>
    <Products />
  </div>
)

export default Home;