import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';



 class Cart extends Component {
    render() {
        const { cartItems } = this.props;
        return (
          <section>
            {cartItems.length === 0 ? (
              <EmptyCart />
            ) : (
              <>
                <Title name="your" title="cart" />
                <CartColumns />{" "}
                            <CartList cartItems={ cartItems}/>
              </>
            )}
          </section>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state.cartItems.cartItems)
    return {
      cartItems: state.cartItems.cartItems,
    };
}

export default connect(mapStateToProps) (Cart);