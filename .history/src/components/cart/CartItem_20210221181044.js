import React from 'react';
import { connect } from 'react-redux';
import {incrementAction, decrementAction, removeItemAction, addTotalsAction } from '../../actions';




 function CartItem(props) {
     const { incrementAction, decrementAction, removeItemAction , addTotalsAction} = props;
     const { id, title, img, price, total, count } = props.item;
     
   const increment = () => {
     incrementAction(id);
     addTotalsAction();
     console.log(count)

   }

   const decrement = () => {
     decrementAction(id);
     addTotalsAction();
     
   }

   const removeItem = () => {
     removeItemAction(id)
     addTotalsAction();


   }

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
                  
                  () => decrement()
                }
              >
                -
              </span>
              <span className="btn btn-black mx-1">{count}</span>
              <span
                className=" btn btn-black mx-1"
                onClick={
                    () => increment()

                
                }
              >
                +
              </span>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="col-10 mx-auto col-lg-2">
          <div className="cart-icon" onClick={removeItem}>
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

 const mapStateToProps = (state) => {
  console.log(state.cartItems)
   return {
     cartItems: state.cartItems
   }
 }



export default connect(mapStateToProps, {decrementAction, incrementAction, removeItemAction, addTotalsAction}) (CartItem);