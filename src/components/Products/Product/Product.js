import React from "react";
import "./Product.css";
const Product = ({ productData }) => {
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

            <button>Add Cart </button>
            <button>View Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
