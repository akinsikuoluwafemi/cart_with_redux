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
    console.log(state);
    return {
        cartSubTotal: state.cartItems,
        cartTax: state.cartItems
    };
}

export default connect(mapStateToProps) (CartTotals);