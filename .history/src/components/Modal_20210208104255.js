import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ButtonContainer } from './Button';
import { openModalAction, closeModalAction} from '../actions';


 class Modal extends Component {
    render() {
        
        const { modalOpen, openModalAction } = this.props;
        
        console.log(modalOpen)
       
        return (
            <div>
                <h1>Hello from Modal</h1>
            </div>
        )
    }
 }

 const mapStateToProps = (state) => {
     console.log(state)
     return {
       modalOpen: state.modalOpen
     };
 }

export default connect(mapStateToProps, {openModalAction}) (Modal);
