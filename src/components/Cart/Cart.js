import React from "react";
import CartItems from "./CartItems/CartItems";

import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const Cart = ({ cart }) => {
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let item = 0;
    let price = 0;

    cart.forEach((items) => {
      item += items.qty;
      price += items.qty * items.price;
    });
    setTotalQty(item);
    setTotalPrice(price);
  }, [cart, totalPrice, totalQty, setTotalQty, setTotalPrice]);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          {cart.map((item) => (
            <CartItems itemData={item}></CartItems>
          ))}
        </div>
        <div
          style={{
            marginLeft: "400px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1>Cart Summary</h1>
          <span>Total Quantity : {totalQty}</span>
          <span> Price :{totalPrice}</span>
          <button>Process To CheckOut</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
