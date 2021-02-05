import React from 'react';
import {}


import './App.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Cart from "./components/Cart";




function App() {
  return (
      <>
      <Navbar/>
      <ProductList />
      <Details />
      <Cart />
      <Default/>
      </>
  );
}

export default App;
