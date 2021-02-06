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
        const {  } = this.props;
        return (
            <div>
                <h3>Hello from details</h3>
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