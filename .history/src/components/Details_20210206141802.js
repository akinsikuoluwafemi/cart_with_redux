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
            <div className="container py-5">
                {/* title */}
                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1>{ title}</h1>
                    </div>
                </div>
                {/* end of title */}

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      productDetail: state.productDetail.detailProduct,
    };
}

export default connect(mapStateToProps, {fetchProductDetail}) (Details);