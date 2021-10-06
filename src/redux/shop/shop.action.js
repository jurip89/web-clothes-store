import { shopActionTypes } from "./shop.types";

export const updateData = (collectionMap) => ({
    type: shopActionTypes.CURRENT_DATA,
    payload: collectionMap
})