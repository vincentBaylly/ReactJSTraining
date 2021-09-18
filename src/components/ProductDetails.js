import React from "react";
import { Component } from "react";

class ProductDetails extends Component {
  render() {
    const { productDetail } = this.props;

    return (
      <div>
        <div>
          <img
            src={productDetail.img}
            width="25%"
            height="25%"
            alt="language icon"
          />
          <h3>{productDetail.name}</h3>
        </div>
        <br />
        <div>{productDetail.description}</div>
        <br />
        <br />
      </div>
    );
  }
}

export default ProductDetails;
