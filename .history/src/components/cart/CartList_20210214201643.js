import React from 'react';
import CartItem from './CartItem';



export default function CartList(props) {
    const { cart } = props;
    // console.log(cart)
    return (
        <div className="container-fluid">
        <CartItem cart={cart} />
            {cart.map(item => Cart )}
      </div>
    );
    
}
