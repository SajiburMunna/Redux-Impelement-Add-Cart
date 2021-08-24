import React from "react";
import Product from "./Product/Product";
import { connect } from "react-redux";
import "./Product/Product.css";
const products = ({ products }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FooD CarT</h1>
      <div>
        {products.map((prd) => (
          <Product key={prd.id} productData={prd}></Product>
        ))}
      </div>
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    products: state.shop.products,
  };
};
export default connect(mapStateProps)(products);
