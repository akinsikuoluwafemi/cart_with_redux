import React from 'react';
import CartItem from './CartItem';
import {connect } from 'react-redux';



 function CartList(props) {
    const { cart, cartItems } = props;
    // console.log(cart)
    return (
        <div className="container-fluid">
            {cart.map(item => {
                return <CartItem key={item.id} item={cartItems} />
            } )}
      </div>
    );
    
 }

  const mapStateToProps = (state) => {
    console.log(state.cartItems);
    return {
      cartItems: state.cartItems.cartItems,
    };
  };

export default connect(mapStateToProps) (CartList);