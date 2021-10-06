import { createSelector } from "reselect";
import memoize from 'lodash.memoize';



const createShop = state => state.shop;

export const selectShopCollections = createSelector(
    [createShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections=> collections ? Object.keys(collections).map(key=> collections[key]) :[]
)


export const selectCollections = memoize((collectionsUrlParams)=> createSelector(
    [selectShopCollections],
    collections=>(collections ? collections[collectionsUrlParams] : null)
))