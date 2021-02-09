import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../Title';




export default class Cart extends Component {
    render() {
        return (
            <section>
                <Title name="your" title="cart"/>
            </section>
        )
    }
}
