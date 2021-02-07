export default initialState = {
  detailProduct: JSON.parse(localStorage.getItem("product")) || [],
  products: [],
  cartItems: [],
};
