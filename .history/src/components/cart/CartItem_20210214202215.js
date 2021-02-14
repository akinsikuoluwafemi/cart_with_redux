import React from 'react';
import { connect} from 'react-redux';



export default function CartItem({item}) {
    console.log(item)
    const { id, title} = item;
    return (
        <div>
            CartItem
        </div>
    )
}
