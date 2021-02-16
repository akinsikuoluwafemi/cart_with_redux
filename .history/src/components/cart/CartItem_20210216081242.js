import React from 'react';
import { connect } from 'react-redux';
import {incrementAction, decrementAction, removeItemAction, addTotalsAction } from '../../actions';




 function CartItem(props) {
     const { incrementAction, decrementAction, removeItemAction } = props;
     const { id, title, img, price, total, count } = props.item;
     

    return (
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div className="">
            product : <span>{title}</span>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div className="">
            price : <span>{price}</span>
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <span
                className=" btn btn-black mx-1"
                onClick={
                  
                  () => decrementAction(id)
                  
                
                }
              >
                -
              </span>
              <span className="btn btn-black mx-1">{count}</span>
              <span
                className=" btn btn-black mx-1"
                onClick={
                  
                  () => incrementAction(id)

                
                }
              >
                +
              </span>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="col-10 mx-auto col-lg-2">
          <div className="cart-icon" onClick={() => removeItemAction(id)}>
            <i className="fas fa-trash" />
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div className="">
            <strong>item total :</strong> {total}
          </div>
        </div>
      </div>
    );
     
   
 }



export default connect(null, {decrementAction, incrementAction, removeItemAction}) (CartItem);