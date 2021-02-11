import { detailProduct } from "../data";
import { data } from '../data';

export default  {
    detailProduct: JSON.parse(localStorage.getItem("product")) || [],
    products: [],
    cartItems: data,
    modalOpen: false,
    modalProduct: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
};
