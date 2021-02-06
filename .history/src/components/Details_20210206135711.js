import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProductDetail } from '../actions';

 class Details extends Component {
    componentDidMount() {
        fetch
    }
    
     
    render() {
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

export default connect(mapStateToProps) (Details);