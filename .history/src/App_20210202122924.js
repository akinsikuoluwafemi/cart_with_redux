import React from 'react';
import {Route } from 'react-router-dom';

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
      <Switch>
        <Route path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
      </Switch>
      < component={Default} />
    </>
  );
}

export default App;
