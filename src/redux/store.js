import { createStore } from "redux";
import productReducer from "./reducers/ProductReducer";

let store = createStore(productReducer);