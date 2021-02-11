import { detailProduct } from "../data";
import data from '../d'

export default  {
    detailProduct: JSON.parse(localStorage.getItem("product")) || [],
    products: [],
    cartItems: [],
    modalOpen: false,
    modalProduct: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
};
