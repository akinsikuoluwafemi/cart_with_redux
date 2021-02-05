import React, { Component } from 'react'
import { connect } from 'react-redux';
import Product from './Product';
import { fetchProducts } from '../actions';
import Title from './Title';




class ProductList extends Component {
    
    componentDidMount(){
        this.props.fetchProducts()
    }
    render() {
        console.log(this.props.products)
        return (
          <div className="py-5">
            <div className="container">
              <Title name="our" title="products" />
              <div className="row">
                <Product  />
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps, {fetchProducts})(ProductList);