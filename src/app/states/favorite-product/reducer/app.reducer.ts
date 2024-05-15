import { createReducer, on } from '@ngrx/store';
import { add, remove, clear, updateAllState } from '../action/app.action';
import { AppState } from '../app.state';

export const initialState: AppState = {
  products:[],
};

export const favoriteReducer = createReducer(
  initialState,
  on(add, (state, {product}) => (
    {
      ...state,
      products: [...state.products, product]
    }
  )
  ),
  on(remove, (state, {product}) => ({
    ...state,
    products: state.products.filter((p)=> product.id != p.id)
  })),
  on(updateAllState, (state, {products}) => (
    {
      ...state,
      products
    }
  )
  ),
  on(clear, state => initialState)
);