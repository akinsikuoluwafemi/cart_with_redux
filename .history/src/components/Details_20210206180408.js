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
        const { productDetail: {id,company, img, info, price, inCart, title} } = this.props;
        return (
          <div className="container py-5">
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            {/* end of title */}
            {/* product info */}
            <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={img} className="img-fluid" alt="product"/>
                    </div>
                    {/* product text */}
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h2>model: {title}</h2>
                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                            made by : <span className="text-uppercase">{company}</span>

                        </h4>
                        <h4 className="text-blue">
                            <strong>
                                price: <span>$</span>
                                {price}
                            </strong>
                        </h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            some info about the product: 
                        </p>
                        <p className="text-muted lead">
                            {info}
                        </p>
                        {/* buttons */}
                        <div></div>
                    </div>
            </div>
          </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
      productDetail: state.productDetail.detailProduct,
    };
}

export default connect(mapStateToProps, {fetchProductDetail}) (Details);