import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



class Product extends Component {
    render() {
        const { id, title, img, price, inCart} = this.props.product;
        return (
            <Produ>
                <h3>Hello from Product</h3>
            </Produ>
        )
    }
}

export default Product;



const ProductWrapper = styled.div`





`