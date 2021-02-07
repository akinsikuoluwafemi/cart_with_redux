const initialState = {
  detailProduct: JSON.parse(localStorage.getItem("product")) || [],
  products: [],
  cartItems: [],
};
