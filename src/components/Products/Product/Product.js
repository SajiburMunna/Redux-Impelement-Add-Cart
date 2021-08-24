import React from "react";
import "./Product.css";
const Product = () => {
  return (
    <div class="row">
      <div class="column">
        <div class="card">
          <img
            style={{ width: "200px" }}
            src=" https://i.pinimg.com/736x/6a/32/6c/6a326c3a0b22ad83854ed49e74cf3327.jpg"
            alt="Avatar"
          ></img>
          <h3>Card 1</h3>
          <p>Some text</p>
          <p>Some text</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
