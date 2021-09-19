import React from "react";
import { Component } from "react";

class ProductDetails extends Component {
  render() {
    const { productDetail } = this.props;

    return (
      <div className="row justify-content-md-center">
        <div className="col-md-3">
          <div className="panel panel-default">
            <div className="panel-body text-center">
              <div className="pv-lg">
                <img
                  className="center-block img-responsive img-circle img-thumbnail thumb96"
                  src={productDetail.img}
                  alt={productDetail.itemName}
                />
              </div>
              <h5 className="m0 text-bold">{productDetail.itemName}</h5>
              <div className="mv-lg">
                <p>{productDetail.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
