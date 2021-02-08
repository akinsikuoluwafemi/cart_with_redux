import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {ButtonContainer } from './Button';

 class Modal extends Component {
    render() {
        return (
            <div>
                <h1>Hello from Modal</h1>
            </div>
        )
    }
 }

export default connect() (Modal;
