import { detailProduct } from "../data";

export default  {
    detailProduct: JSON.parse(localStorage.getItem("product")) || [],
    products: [],
    cartItems: [],
    modalOpen: false,
    modalProduct: []
};
