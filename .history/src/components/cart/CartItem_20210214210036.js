import React from 'react';
import { connect } from 'react-redux';
import {incrementAction, decrementAction, removeItemAction } from '../../actions';




 function CartItem({item}) {
    console.log(item)
     const { id, title, img, price, total, count } = item;
     

    return (
      <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <div className="d-lg-none">
                    product : <span>{ title}</span>
            </div>
            </div>
             <div className="col-10 mx-auto col-lg-2">
            <div className="d-lg-none">
                    price : <span>{ price}</span>
            </div>
            </div>
            
      </div>
    );
}

export default CartItem;