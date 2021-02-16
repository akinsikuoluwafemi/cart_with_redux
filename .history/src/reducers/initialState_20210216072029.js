import { detailProduct } from "../data";
import { storeProducts as data } from '../data';

export default  {
    detailProduct: JSON.parse(localStorage.getItem("product")) || [],
    products: [],
    cartItems: data,
    modalOpen: false,
    modalProduct: [],
    cartSubTotal: 10,
    cartTax: 20,
    cartTotal: 30
};
