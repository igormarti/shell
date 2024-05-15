import { createAction, props } from '@ngrx/store';
import Product from '../../../models/product.model';

export const add = createAction('[FavoriteProduct] Add',  props<{ product: Product }>());
export const remove = createAction('[FavoriteProduct] Remove', props<{ product: Product }>());
export const updateAllState = createAction('[FavoriteProduct] Update all state of favorites products', 
 props<{ products: Product[] }>());
export const clear = createAction('[FavoriteProduct] Clear');