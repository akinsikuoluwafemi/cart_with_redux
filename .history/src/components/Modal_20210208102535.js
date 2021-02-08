import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ButtonContainer } from './Button';
import { } from '../actions';


 class Modal extends Component {
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

export default connect(mapStateToProps, {}) (Modal);
