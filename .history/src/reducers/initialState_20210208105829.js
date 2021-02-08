import { detailProduct } from "../data";

export default  {
   detailProduct: JSON.parse(localStorage.getItem("product")) || [],
    products: [],
    cartItems: [],
    modalOpen: true,
   modalProduct: detailProduct
};
