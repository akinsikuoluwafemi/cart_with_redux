import React from 'react';
import { connect } from 'react-redux';
import {incrementAction, decrementAction, removeItemAction } from '../../actions';




 function CartItem({item}) {
    console.log(item)
     const { id, title, img, price, total, count } = item;
     

    return (
        <div className="row my-1 text-capitalize text-center">
            .col-10.mx-auto.col
        </div>
    )
}

export default CartItem;