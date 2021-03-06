import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



class Product extends Component {
    render(){
        const { id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={() => console.log('you clicked me on the img container')}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true: false} onClick={() => console.log('added to the cart')}>
                            {inCart ? (<p className="text-capitalize mb-0" disabled>inCart</p>) : (<i className="fas fa-cart" />)}
                        </button>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

export default Product;



const ProductWrapper = styled.div`





`