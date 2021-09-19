import React, { useState } from "react";
import ProductItem from "./ProductItem";
import ProductDetails from "./ProductDetails";
import Comment from "../Comment/Comment";

const productItems = [
  {
    id: 1,
    itemName: "Brosse à Dents en Bambou Recyclable pour Adulte",
    description: "Brosse à Dents en Bambou Recyclable pour Adulte",
    img: "https://www.creacolo.com/medias/images/la-maison-du-bambou-brosse-a-dents-en-bambou-zero-dechet-reutilisable-6428188115040.jpg",
    price: 3.9,
    isFavorite: false,
    comments: [
      {
        id: 1,
        date: new Date(),
        text: "Tres utile",
        author: {
          name: "Jane Doe",
          avatarUrl:
            "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351974-stock-illustration-default-placeholder-woman.jpg",
        },
      },
      {
        id: 2,
        date: new Date(),
        text: "La bombe est fantastique pour les enfants et les mamans!",
        author: {
          name: "Hello Kitty",
          avatarUrl: "https://placekitten.com/g/64/64",
        },
      },
    ],
  },
  {
    id: 2,
    itemName: "Shampoing Illuminateur (45g)",
    description:
      "Shampoing à base de Henné, d'huile de noix de coco, cire d'abeille et huile essentielle de camomille.  Idéal pour les cheveux clair et Roux.",
    img: "https://static.wixstatic.com/media/e60367_94c208e8fc184d8a9742dec34acf8261~mv2.jpg/v1/fill/w_267,h_267,al_c,q_80,usm_0.66_1.00_0.01/e60367_94c208e8fc184d8a9742dec34acf8261~mv2.webp",
    price: 6,
    isFavorite: false,
    comments: [
      {
        id: 1,
        date: new Date(),
        text: "Tres beau produit",
        author: {
          name: "Hello Kitty",
          avatarUrl: "https://placekitten.com/g/64/64",
        },
      },
    ],
  },
  {
    id: 3,
    itemName: "Savon Doux et Exfoliant au Miel et Pavot",
    description:
      "Voici un magnifique savon doux et exfoliant à la fois. Fait entièrement de produits naturels.",
    img: "https://static.wixstatic.com/media/e60367_5182113e806544df8c59cc5b8d3699a5~mv2.jpg/v1/fill/w_267,h_267,al_c,q_80,usm_0.66_1.00_0.01/e60367_5182113e806544df8c59cc5b8d3699a5~mv2.webp",
    price: 6.5,
    isFavorite: false,
    comments: [
      {
        id: 1,
        date: new Date(),
        text: "J'ai enfin reçu mon savon, je vais pouvoir le tester",
        author: {
          name: "Hello Kitty",
          avatarUrl: "https://placekitten.com/g/64/64",
        },
      },
    ],
  },
  {
    id: 4,
    itemName: "Bombe de bain",
    description: "Magnifique bombe de bain à l'essence de rose!",
    img: "https://static.wixstatic.com/media/e60367_98a8eac99bdd4677917fa068f0a6aeb1~mv2.jpg/v1/fill/w_267,h_267,al_c,q_80,usm_0.66_1.00_0.01/e60367_98a8eac99bdd4677917fa068f0a6aeb1~mv2.webp",
    price: 4,
    isFavorite: false,
    comments: [
      {
        id: 1,
        date: new Date(),
        text: "La bombe est fantastique pour les enfants et les mamans!",
        author: {
          name: "Hello Kitty",
          avatarUrl: "https://placekitten.com/g/64/64",
        },
      },
    ],
  },
];

function getProductDescription(productId) {
  return productItems[productId];
}

function ProductList() {
  const [productToShow, setProductToShow] = useState(0);
  const showProductDescription = (i) => {
    setProductToShow(getProductDescription(i));
  };

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
