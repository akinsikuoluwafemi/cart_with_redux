import React from 'react';
import { connect } from 'react-redux';
import { clearCartAction } from '../../actions';
import { Link } from 'react-router-dom';

 function CartTotals({cartSubTotal, cartTax, cartTotal, clearCartAction}) {
     return (
        <>
             <div className="container">
                 <div className="row">
                     <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                         <Link to="/">
                             
                             
                        </Link>
                     </div>
                 </div>
            </div>
        </>
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