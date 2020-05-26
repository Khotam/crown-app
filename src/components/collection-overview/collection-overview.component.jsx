import React from "react";

import "./collection-overview.styles.scss";
import { useSelector } from "react-redux";
import { selectShopCollectionsForPreview } from "../../redux/reducers/shopData/shopData.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = () => {
  const collections = useSelector(selectShopCollectionsForPreview);

  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverview;
