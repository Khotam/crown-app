import { createSelector } from "reselect";

const selectShopData = (state) => state.shopData;

export const selectShopCollections = createSelector(
  [selectShopData],
  (shopData) => shopData.collections
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = createSelector(
  [selectShopCollections, (_, collectionId) => collectionId],
  (collection, collectionUrlParam) => collection[collectionUrlParam]
);
