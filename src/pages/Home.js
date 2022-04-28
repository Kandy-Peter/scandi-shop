import React from 'react';
import Header from '../components/navbar/Header'
import Products from '../components/navbar/products';

const Home = () => (
  <div className="container">
    <Header />
    <Products />
    <p>Home page</p>
  </div>
)

export default Home;