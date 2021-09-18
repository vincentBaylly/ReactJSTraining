import React from "react";

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: this.props.productItem.isFavorite,
    };
    this.handleClickFavorite = this.handleClickFavorite.bind(this);
  }

  handleClickFavorite() {
    const { isFavorite } = this.state;
    this.setState({
      isFavorite: !isFavorite,
    });
  }

  render() {
    const { productItem } = this.props;
    const { isFavorite } = this.state;

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
        </div>
        <div className="rightContainer">
          {productItem.price} EUR
          <div
            onClick={this.handleClickFavorite}
            className={isFavorite ? "isFavorite" : "notFavorite"}
          ></div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
