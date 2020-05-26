import React from "react";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/reducers/shopData/shopData.selectors";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection.styles.scss";

const Collection = ({ match }) => {
  const routeUrl = match.params.collectionId;
  const { title, items } = useSelector((state) =>
    selectCollection(state, routeUrl)
  );

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
