import React, { useState } from "react";
import {
  removeFromCart,
  adjustQty,
} from "../../../redux/Shopping/shopping-actions";
import { connect } from "react-redux";

const CartItems = ({ itemData, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(itemData.qty);

  const onChangeHadler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };
  return (
    <div class="row">
      <div class="column">
        <div class="card" style={{ marginBottom: "20px", width: "400px" }}>
          <img
            style={{ width: "200px" }}
            src={itemData.image}
            alt="Avatar"
          ></img>
          <h3> {itemData.title} </h3>
          <p>Price : {itemData.price} </p>
          <div>
            <label htmlFor="qty">QTY</label>
            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              value={itemData.qty}
              onChange={onChangeHadler}
            ></input>
          </div>

          <button onClick={() => removeFromCart(itemData.id)}>
            Remove cart
          </button>
        </div>
      </div>
    </div>
  );
};

const mapToDispatchProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapToDispatchProps)(CartItems);
