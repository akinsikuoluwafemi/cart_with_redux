import React, { Component } from 'react'
import { connect } from 'react-redux';
import Product from './Product';




class ProductList extends Component {
    render() {
        return (
            <div>
                <Product/>
            </div>
        )
    }
}

const mapSt

export default connect()(ProductList);