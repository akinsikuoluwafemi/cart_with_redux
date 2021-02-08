import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductDetail , addToCart } from '../actions';
import { Link } from 'react-router-dom';
import {ButtonContainer } from './Button';



 class Details extends Component {
    
     
     
    render() {
        const { productDetail, addToCart } = this.props;
        console.log(productDetail)
      return (
        <div className="container py-5">
          <div className="row">
            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
              <h1>{productDetail.title}</h1>
            </div>
          </div>
          {/* end of title */}
          {/* product info */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <img src={productDetail.img} className="img-fluid" alt="product" />
            </div>
            {/* product text */}
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <h2>model: {productDetail.title}</h2>
              <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                made by : <span className="text-uppercase">{productDetail.company}</span>
              </h4>
              <h4 className="text-blue">
                <strong>
                  price: <span>$</span>
                  {productDetail.price}
                </strong>
              </h4>
              <p className="text-capitalize font-weight-bold mt-3 mb-0">
                some info about the product:
              </p>
              <p className="text-muted lead">{productDetail.info}</p>
              {/* buttons */}
              <div>
                <Link to="/">
                  <ButtonContainer>back to products</ButtonContainer>
                </Link>
                <ButtonContainer
                  cart
                  disabled={productDetail.inCart ? true : false}
                  onClick={() => {
                    addToCart(productDetail)
                    // productDetail.count = 1;
                    // productDetail.inCart = true;
                    // const price = productDetail.price;
                    // productDetail.total = price;


                  }}
                >
                  {productDetail.inCart ? "inCart" : "add to cart"}
                </ButtonContainer>
              </div>
            </div>
          </div>
        </div>
      );
    }
}


const mapStateToProps = (state) => {
    // console.log(state.cartItems.cartItems);
    console.log(state.productDetail.detailProduct)
    return {
      productDetail: state.productDetail.detailProduct,

    };
}

export default connect(mapStateToProps, {fetchProductDetail, addToCart}) (Details);




            