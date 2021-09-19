import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import ProductDetails from "./ProductDetails";
import Comment from "../Comment/Comment";
import { getProducts, getProductDescription } from "../../helper/db.js";

function ProductList() {
  const [productToShow, setProductToShow] = useState(0);
  const [productItems, setproductItems] = useState([]);
  const showProductDescription = (i) => {
    setProductToShow(getProductDescription(productItems, i));
  };

  useEffect(() => {
    const fetchData = async () => {
      getProducts().then((productItems) => {
        setproductItems(productItems);
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="productList">
        {productItems.map((itemInfo) => (
          <ProductItem
            productItem={itemInfo}
            key={itemInfo.id}
            showProductDescription={showProductDescription}
          />
        ))}
      </div>
      {productToShow ? (
        <div>
          <ProductDetails productDetail={productToShow} />
          {productToShow.comments.map((comment) => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ProductList;
