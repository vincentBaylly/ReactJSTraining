import React, { useState, useCallback } from "react";

function ProductItem(props) {
  const [favorite, isFavorite] = useState(props.productItem.isFavorite);
  const { productItem } = props;

  const handleClickFavorite = () => {
    isFavorite(!favorite);
  };

  const handleClickDescription =
    //() => {
    //props.showProductDescription(productItem.id);
    useCallback(
      (event) => {
        props.showProductDescription(productItem.id - 1);
      },
      [productItem.id, props]
    );
  //};

  return (
    <div>
      <div className="row">
        <div className="col-md">
          <img src={productItem.img} alt="" className="center-block thumb96" />
        </div>
        <div className="col-md">
          <h5>{productItem.itemName}</h5>
        </div>
        <div className="col-md">
          <button className="btn btn-info" onClick={handleClickDescription}>
            Info
          </button>
        </div>
        <div className="col-md">
          {productItem.price} EUR
          <div
            onClick={handleClickFavorite}
            className={favorite ? "isFavorite" : "notFavorite"}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
