import React from 'react';
import { connect} from 'react-redux';



export default function CartItem({item}) {
    console.log(item)
    const { id, title, img, price, total} = item;
    return (
        <div>
            CartItem
        </div>
    )
}
