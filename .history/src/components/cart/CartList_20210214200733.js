import React from 'react';
import CartItem from './CartItem';



export default function CartList(props) {
    const { cart } = props;
    console.log(cart)
    return (
        return <CartItem cart={ cart}/>
}
