import React from 'react';
import {Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Cart from "./components/Cart";
import { Switch } from 'react-router-dom';
import Modal from './components/'



function App() {
  return (
    <>
      <Navbar />
      <Switch> 
        <Route exact path="/" component={ProductList} />
        <Route  path="/details" component={Details} />
        <Route  path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch> 
    </>
  );
}

export default App;
