import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';



 class Cart extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <section>
                <Title name="your" title="cart" />
                {cart}
                <CartColumns />
                <EmptyCart/>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.cartItems.cartItems)
    return {
      cartItems: state.cartItems.cartItems,
    };
}

export default connect(mapStateToProps) (Cart);