import React from 'react';
import { connect } from 'react-redux';
import {incrementAction, dec } from '../../actions';



export default function CartItem({item}) {
    console.log(item)
    const { id, title, img, price, total, count } = item;
    return (
        <div>
            CartItem
        </div>
    )
}
