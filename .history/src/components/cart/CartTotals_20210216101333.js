import React from 'react';
import { connect } from 'react-redux';
import { clearCartAction, fetchProducts } from '../../actions';
import { Link } from 'react-router-dom';

 function CartTotals({cartSubTotal, cartTax, cartTotal, clearCartAction, fetchProducts}) {
    
     const clearCart = () => {
         fetch
     }
     
     return (
       <>
         <div className="container">
           <div className="row">
             <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
               <Link to="/">
                 <button
                   className="btn btn-outline-danger text-uppercase mb-3 px-5"
                   type="button"
                   onClick={() => clearCartAction()}
                 >
                   clear cart
                 </button>
               </Link>
               <h5>
                 <span className="text-title">subtotal :</span>
                 <strong>$ {cartSubTotal}</strong>
               </h5>
               <h5>
                 <span className="text-title">tax :</span>
                 <strong>$ {cartTax}</strong>
               </h5>
               <h5>
                 <span className="text-title">total :</span>
                 <strong>$ {cartTotal}</strong>
               </h5>
             </div>
           </div>
         </div>
       </>
     );
}

const  mapStateToProps = (state) => {
    return {
      cartSubTotal: state.cartItems.cartSubTotal,
      cartTax: state.cartItems.cartTax,
      cartTotal: state.cartItems.cartTotal,
    };
}

export default connect(mapStateToProps, {clearCartAction, fetchProducts}) (CartTotals);