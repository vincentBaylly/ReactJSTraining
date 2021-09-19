import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import ProductDetails from "./ProductDetails";
import Comment from "../Comment/Comment";
import firebase from "../../firebase";
import { ref, child, get } from "firebase/database";

function getProductDescription(productItems, productId) {
  return productItems[productId];
}

function mapFireBaseProduct(firebaseitem) {
  return {
    id: firebaseitem.id,
    itemName: firebaseitem.itemName,
    description: firebaseitem.description,
    price: firebaseitem.price,
    img: firebaseitem.img,
    isFavorite: firebaseitem.isFavorite,
    comments: [],
  };
}

function ProductList() {
  const [productToShow, setProductToShow] = useState(0);
  const [productItems, setproductItems] = useState([]);
  const showProductDescription = (i) => {
    setProductToShow(getProductDescription(productItems, i));
  };

  useEffect(() => {
    const dbRef = ref(firebase);
    get(child(dbRef, "product"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let newState = [];
          snapshot.forEach((snap) => {
            newState.push(mapFireBaseProduct(snap.val()));
          });
          setproductItems(newState);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
