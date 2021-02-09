import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../Title';
import CartColumns from './Cart'



export default class Cart extends Component {
    render() {
        return (
            <section>
                <Title name="your" title="cart" />
                
            </section>
        )
    }
}
