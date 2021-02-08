import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ButtonContainer } from './Button';
import { openModalAction, closeModalAction, changeModalProductAction} from '../actions';
import { Link } from 'react-router-dom';

 class Modal extends Component {
    render() {
        
        const { modalOpen, closeModalAction, openModalAction, changeModalProductAction, modalProduct } = this.props;
        const { title, img, price } = modalProduct;
        console.log(modalOpen)
       
        return (
            <>
                {modalOpen ? (

                    <ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize py-5">
                                    <h5>Item added to the cart</h5>
                                    <img src={img} className="img-fluid" alt="product" />
                                    <h5>{title}</h5>
                                    <h5 className="text-muted">price: ${price}</h5>
                                    <Link to="/">
                                        
                                        Continue Shopping</Link>
                                </div>
                            </div>
                        </div>
                    </ModalContainer>

                ) : null}
                
                </>
            
        )
    }
 }

 const mapStateToProps = (state) => {
     console.log(state.products)
     return {
         modalOpen: state.modalOpen.modalOpen,
         modalProduct: state.modalOpen.modalProduct
     };
 }

export default connect(mapStateToProps, {openModalAction, changeModalProductAction, closeModalAction}) (Modal);


const ModalContainer = styled.div`
    position:fixed;
    top: 0;
    left:0;
    right:0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;

    #modal {
        background: var(--mainWhite);
    }


`;