import React, { Component } from 'react';
import { connect } from 'react-redux';


 class Details extends Component {
    render() {
        return (
            <div>
                <h3>Hello from details</h3>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state.productDetail.productDeta);
    return {
      productDetail: state.productDetail,
    };
}

export default connect(mapStateToProps) (Details);