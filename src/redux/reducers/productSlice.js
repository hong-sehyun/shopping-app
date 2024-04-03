import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let initialState = {
    productList: [],
    productDetail: {},
    isLoading: false,
    error: null,
}

// function productReducer(state = initialState, action) {
//     let { type, payload } = action
//     switch (type) {
//         case "GET_PRODUCT_SUCCESS":
//             return { ...state, productList: payload.data };
//         case "GET_PRODUCT_DETAIL":
//             return { ...state, productDetail: payload.data };
//         default:
//             return { ...state }
//     }
// }

// export default productReducer;

export const fetchProducts = createAsyncThunk(
    'product/fetchAll',
    async (searchQuery, thunkApi) => {
        try {
            let url = `https://my-json-server.typicode.com/hong-sehyun/shopping-app/products?q=${searchQuery}`;
            let response = await fetch(url);
            return await response.json();
        } catch (error) {
            thunkApi.rejectWithValue(error.message)
        }
    });

export const fetchProductDetail = createAsyncThunk(
    'product/fetchDetail',
    async (id, thunkApi) => {
        try {
            let url = `https://my-json-server.typicode.com/anjuhim/hnm-react-router-practice/products/${id}`;
            let response = await fetch(url);
            return await response.json(); 
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    });

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // getAllProducts(state, action) {
        //     state.productList = action.payload.data
        // },
        // getProductDetail(state, action) {
        //     state.productDetail = action.payload.data;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productList = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(fetchProductDetail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProductDetail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productDetail = action.payload; 
            })
            .addCase(fetchProductDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});
console.log("ppp", productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;