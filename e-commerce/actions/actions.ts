import axios from "axios";
import { Dispatch } from "redux";
import { CartProduct } from "../reducers/cartReducer";
import { Product } from "@/reducers/productReducer";



export const toggleSidebar = () => {
    return {
      type: 'TOGGLE_SIDEBAR',
    };
  };

  export const fetchProducts = (data: Product[]) => {
    return async (dispatch: Dispatch) => {
      dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data });
    };
  };
  
  // Action для обновления данных о товаре
  export const updateProduct = (productId: string, updatedData: any) => {
    return { type: 'UPDATE_PRODUCT', payload: { productId, updatedData } };
  };

  export const addProductToCart = (product: CartProduct) => ({
    type: 'ADD_PRODUCT_TO_CART',
    payload: product,
  });

  export const removeProductFromCart = (productId: string) => ({
    type: 'REMOVE_PRODUCT_FROM_CART',
    payload: productId,
  });