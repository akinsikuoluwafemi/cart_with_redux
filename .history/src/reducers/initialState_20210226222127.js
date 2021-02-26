export default  {
    detailProduct: JSON.parse(localStorage.getItem("product")) || [],
    products: [],
    cartItems: [],
    modalOpen: false,
    modalProduct: [],
    cartSubTotal: 10,
    cartTax: 20,
    cartTotal: 30
};
