import React from "react";

const MealContext = React.createContext({
  meals: [],
  fetching: false,
  error: null,
  markAdded: () => { },
  removeAdded: () => { },
  searchItems: () => { },
  clearAdded: () => { }
});

export default MealContext;
