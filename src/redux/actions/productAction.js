import { productActions } from "../reducers/productSlice";

// function getProducts(searchQuery) {
//     return async (dispatch, getState) => {
//         let url = `https://my-json-server.typicode.com/hong-sehyun/shopping-app/products?q=${searchQuery}`;
//         let response = await fetch(url);
//         let data = await response.json();

//         // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
//         dispatch(productActions.getAllProducts({ data }));
//     };
// }

// function getProductDetail(id) {
//     return async (dispatch, getState) => {
//         let url = `https://my-json-server.typicode.com/anjuhim/hnm-react-router-practice/products/${id}`;
//         let response = await fetch(url);
//         let data = await response.json();

//         // dispatch({ type: "GET_PRODUCT_DETAIL", payload: { data } });
//         dispatch(productActions.getProductDetail({ data }));
//     };
// }

// export const productAction = { getProducts, getProductDetail };
// export const productAction = { getProductDetail };