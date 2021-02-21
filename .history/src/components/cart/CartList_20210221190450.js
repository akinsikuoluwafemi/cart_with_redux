import React from 'react';
import CartItem from './CartItem';
import {connect } from 'react-redux';



 function CartList(props) {
    const { cart } = props;
    // console.log(cart)
    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <CartItem key={item.id} item={item} />
            } )}
      </div>
    );
    
 }


export default  CartList;