import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductDetail } from '../actions';
import { Link } from 'react-router-dom';
import {ButtonContainer } from './Button';




 class Details extends Component {
    componentDidMount() {
        this.props.fetchProductDetail()
    }
    
     
     
    render() {
        console.log(this.props.productDetail)
        const { productDetail: {id,company, img, info, price, inCart} } = this.props;
        return (
            <div className="container"></div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      productDetail: state.productDetail.detailProduct,
    };
}

export default connect(mapStateToProps, {fetchProductDetail}) (Details);