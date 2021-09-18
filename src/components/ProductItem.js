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
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          <img src={productItem.img} alt="" className="listImg" />
        </div>
        <div className="itemDescription">
          <h3>{productItem.itemName}</h3>
          <p>{productItem.description}</p>
        </div>
        <button className="btn btn-info" onClick={handleClickDescription}>
          Info
        </button>
      </div>
      <div className="rightContainer">
        {productItem.price} EUR
        <div
          onClick={handleClickFavorite}
          className={favorite ? "isFavorite" : "notFavorite"}
        ></div>
      </div>
    </div>
  );
}

export default ProductItem;
