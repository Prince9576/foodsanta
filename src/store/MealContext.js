import React from "react";

const MealContext = React.createContext({
  meals: [],
  markAdded: () => {},
  removeAdded: () => {},
  searchItems: () => {},
});

export default MealContext;
