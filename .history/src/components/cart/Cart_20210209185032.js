import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';



 class Cart extends Component {
    render() {
        return (
            <section>
                <Title name="your" title="cart" />
                <CartColumns />
                <EmptyCart/>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart
    }
}

export default connect() (Cart);