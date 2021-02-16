import React from 'react';
import { connect } from 'react-redux';

 function CartTotals() {
    return (
        <div>
            CartTotals
        </div>
    )
}

const  mapStateToProps = (state) => {
    return {
      cartSubTotal: state.cartItems.cartSubTotal,
      cartTax: state.cartItems.cartTax,
      cartTotal: state.cartItems.cartTotal,
    };
}

export default connect(mapStateToProps) (CartTotals);