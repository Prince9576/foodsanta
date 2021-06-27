import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  console.log("Reducer called", action);
  if (action.type === "ADD") {
    action.item.added = true;
    const updatedItems = prevState.items.concat(action.item);
    const totalAmount = Math.round(
      prevState.totalAmount + action.item.amount * action.item.price
    );
    return {
      items: updatedItems,
      totalAmount: totalAmount,
    };
  } else if (action.type === "UPDATE") {
    const indexOfItem = prevState.items.findIndex((item) => {
      return item.id === action.id;
    });
    console.log("Index of Item", indexOfItem);
    const selectedItem = prevState.items[indexOfItem];
    selectedItem.amount = action.amount;
    const newTotalAmount = prevState.items.reduce((pv, cv) => {
      return pv + cv.price * cv.amount;
    }, 0);
    return {
      items: prevState.items,
      totalAmount: newTotalAmount,
    };
  }
  return defaultState;
};
const CartContextProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultState);
  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const updateItemToCartHandler = (id, amount) => {
    dispatchCart({ type: "UPDATE", id: id, amount: amount });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    updateItem: updateItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
