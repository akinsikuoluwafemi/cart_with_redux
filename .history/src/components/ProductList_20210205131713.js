import React, { Component } from 'react'
import { connect } from 'react-redux';
import Product from './Product';
import { fetchProducts } from '../actions';




class ProductList extends Component {
    render() {
        return (
            <div>
                <Product/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps, {})(ProductList);