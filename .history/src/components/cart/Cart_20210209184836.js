import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../Title';
import CartColumns from './CartColumns';
import 


export default class Cart extends Component {
    render() {
        return (
            <section>
                <Title name="your" title="cart" />
                <CartColumns/>
            </section>
        )
    }
}
