import React from 'react';
import { connect } from 'react-redux';
import { clearCartAction } from '../../actions';


 function CartTotals({cartSubTotal, cartTax, cartT}) {
    console.log(props)
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

export default connect(mapStateToProps, {clearCartAction}) (CartTotals);