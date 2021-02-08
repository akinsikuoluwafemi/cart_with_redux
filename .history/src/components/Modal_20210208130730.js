import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ButtonContainer } from './Button';
import { openModalAction, closeModalAction, changeModalProductAction} from '../actions';
import { Link } from 'react-router-dom';

 class Modal extends Component {
    render() {
        
        const { modalOpen, closeModalAction, openModalAction, changeModalProductAction, modalProduct } = this.props;

        console.log(modalOpen)
        console.log(modalProduct)
       
        return (
            <div>
                <h1>Hello from Modal</h1>
            </div>
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
