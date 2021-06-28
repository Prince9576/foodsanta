import React from "react";

const MealContext = React.createContext({
  meals: [],
  markAdded: () => {},
  removeAdded: () => {},
});

export default MealContext;
