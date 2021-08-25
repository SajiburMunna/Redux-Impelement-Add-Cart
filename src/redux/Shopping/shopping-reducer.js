import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "food1",
      price: 100,
      image:
        "https://i1.wp.com/sg.fdblogs.wpengine.com/wp-content/uploads/sites/2/2016/05/salted-eggs.jpg",
    },
    {
      id: 2,
      title: "food2",
      price: 150,
      image:
        "https://www.brandinginasia.com/wp-content/uploads/2016/12/Foodpanda-Pakistan.jpg",
    },
    {
      id: 3,
      title: "food3",
      price: 200,
      image:
        "https://magazine.foodpanda.sg/wp-content/uploads/sites/2/2020/01/cropped-xiumai.jpg",
    },
    {
      id: 4,
      title: "food1",
      price: 250,
      image:
        " https://i.pinimg.com/736x/6a/32/6c/6a326c3a0b22ad83854ed49e74cf3327.jpg",
    },
    {
      id: 5,
      title: "food5",
      price: 250,
      image:
        "https://i0.wp.com/sg.fdblogs.wpengine.com/wp-content/uploads/sites/2/2016/05/Yogart_cover.png?fit=717%2C514&ssl=1",
    },
  ], //{title,id,img,des,price}
  cart: [], //{title,id,img,des,price,qty}
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((pd) => pd.id === action.payload.id);
      const inCart = state.cart.find((item) => item.id === action.payload.id)
        ? true
        : false;
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
