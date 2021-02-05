import React, { Component } from 'react'
import { connect } from 'react-redux';
import Product from './Product';




export default class ProductList extends Component {
    render() {
        return (
            <div>
                <Product/>
            </div>
        )
    }
}
