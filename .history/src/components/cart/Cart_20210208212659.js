import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../Title';




export default class Cart extends Component {
    render() {
        return (
            <section>
                <Title name="your" title="cart"/>
                <h3>Hello from cart</h3>
            </section>
        )
    }
}