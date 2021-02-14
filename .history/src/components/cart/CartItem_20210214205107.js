import React from 'react';
import { connect } from 'react-redux';
import {incrementAction, decrementAction, removeItemAction } from '../../actions';




 function CartItem({item}) {
    console.log(item)
     const { id, title, img, price, total, count } = item;
     

    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{ width: '5rem', height: "5rem" }} alt="cart items" />
            </div>
        </div>
    )
}

export default CartItem;