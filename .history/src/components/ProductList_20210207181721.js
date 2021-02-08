import React, { Component } from 'react'
import { connect } from 'react-redux';
import Product from './Product';
import { fetchProducts, addToCart } from '../actions';
import Title from './Title';




class ProductList extends Component {
    
    componentDidMount(){
        this.props.fetchProducts()
    }



    render() {
        return (
          <div className="py-5">
            <div className="container">
              <Title name="our" title="products" />
              <div className="row"> 
                  <Product products={this.props.products}/>
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  console.log(state.cartItems.cartItems);
  console.log(state.products.products)
    
  return {
        products: state.products.products,
        productDetail: state.productDetail.productDetail
    }
}

export default connect(mapStateToProps, {fetchProducts, addToCart})(ProductList);