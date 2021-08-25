import React from "react";
import "./Product.css";

import { connect } from "react-redux";

import { addToCart } from "./../../../redux/Shopping/shopping-actions";
const Product = ({ productData, addToCart }) => {
  return (
    <div>
      <div class="row">
        <div class="column">
          <div class="card" style={{ marginBottom: "20px" }}>
            <img
              style={{ width: "200px" }}
              src={productData.image}
              alt="Avatar"
            ></img>
            <h3>{productData.title}</h3>
            <p>Price : {productData.price}</p>

            <button onClick={() => addToCart(productData.id)}>Add Cart </button>
            <button>View Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapToDispatch = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapToDispatch)(Product);
