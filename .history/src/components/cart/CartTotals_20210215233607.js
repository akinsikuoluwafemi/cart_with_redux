import React from 'react';
import { connect } from 'react-redux';

 function CartTotals() {
    return (
        <div>
            CartTotals
        </div>
    )
}

const  mapStateToProps = (state) => {
    console.log(state)
    return {
        state: state
    }
}

export default connect(mapStateToProps) (CartTotals);