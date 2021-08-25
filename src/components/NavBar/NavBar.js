import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";

const NavBar = ({ cart }) => {
  const [cartCount, setCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;

      setCount(count);
    });
  }, [cart]);
  return (
    <div>
      <div class="topnav">
        <Link class="active" to="/">
          Food
        </Link>
        <Link to="/cart">
          <div style={{ display: "flex" }}>
            <div>Cart </div>

            <div style={{ marginLeft: "200px" }}>count :{cartCount}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapToProps)(NavBar);
