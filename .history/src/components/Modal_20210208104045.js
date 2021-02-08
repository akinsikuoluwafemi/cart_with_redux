import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ButtonContainer } from './Button';
import { openModalAction, closeModalAction} from '../actions';


 class Modal extends Component {
     const {modalOpen } = this.props;
    render() {
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
       modalOpen: state.modalOpen.modalOpen
     };
 }

export default connect(mapStateToProps, {openModalAction}) (Modal);
