import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductDetail , addToCart } from '../actions';
import { Link } from 'react-router-dom';
import {ButtonContainer } from './Button';



 class Details extends Component {
    componentDidMount() {
        // this.props.fetchProductDetail()
    }
    
     
     
    render() {
        const { productDetail: { id, company, img, info, price, inCart, title }, addToCart } = this.props;
        // console.log(this.props);
        
        return (
          <div className="container py-5">
            
          </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
      productDetail: state.productDetail.detailProduct,
    };
}

export default connect(mapStateToProps, {fetchProductDetail, addToCart}) (Details);




