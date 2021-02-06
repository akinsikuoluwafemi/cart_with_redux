import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



class Product extends Component {
    render() {
        return (
            <div>
                <h3>Hello from Product</h3>
            </div>
        )
    }
}

export default connect() (Product);
