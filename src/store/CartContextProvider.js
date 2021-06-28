import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const totalCalculator = (arr) => {
  const newTotalAmount = arr.reduce((pv, cv) => {
    return pv + cv.price * cv.amount;
  }, 0);
  return newTotalAmount;
};

const cartReducer = (prevState, action) => {
  console.log("Reducer called", action);
  if (action.type === "ADD") {
    if (action.item.added) {
      return prevState;
    }
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
    const newTotalAmount = totalCalculator(prevState.items);
    return {
      items: prevState.items,
      totalAmount: newTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    const indexOfItem = prevState.items.findIndex((item) => {
      return action.id === item.id;
    });
    const updatedItemsCopy = [...prevState.items];
    updatedItemsCopy.splice(indexOfItem, 1);
    const updatedTotal = totalCalculator(updatedItemsCopy);
    console.log("updatedItems", updatedTotal);
    return {
      items: updatedItemsCopy,
      totalAmount: updatedTotal,
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
