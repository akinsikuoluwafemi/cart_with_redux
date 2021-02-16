import React from 'react';
import { connect } from 'react-redux';
import {incrementAction, decrementAction, removeItemAction } from '../../actions';




 function CartItem(props) {
     const { incrementAction, decrementAction, removeItemAction } = props;
     const { id, title, img, price, total, count } = props.item;
     

    return (
      <div className="row my-1 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <div className="d-lg-none">
                    product : <span>{ title}</span>
            </div>
            </div>
             <div className="col-10 mx-auto col-lg-2">
            <div className="d-lg-none">
                    price : <span>{ price}</span>
            </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className=" btn btn-black mx-1" onClick={() => decrementAction(id)}>-</span>
                        
                    </div>
                </div>
            </div>
            {/*  */}
      </div>
    );
     
   
 }

   const mapStateToProps = (state) => {
     console.log(state)
       return {
       state: state,
     };
   };

export default connect(mapStateToProps, {decrementAction, incrementAction, removeItemAction}) (CartItem);