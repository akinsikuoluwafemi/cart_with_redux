import React from 'react';


import './App.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Cart from "./components/Cart";
import { Switch } from 'react-router-dom';




function App() {
  return (
      <>
      <Navbar />
      <Switch
      <ProductList />
      <Details />
      <Cart />
      <Default/>
      </>
  );
}

export default App;
