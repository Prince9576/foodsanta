import { useEffect, useReducer } from "react";
import DUMMY_MEALS from "../config/dummy-meals";
import configration from "../config/request-config";
import MealContext from "./MealContext";

let DEFAULT_STATE = {
  meals: [],
  fetching: false,
  error: null,
};

const API_KEY = "2c6e0072979140b8954fc0d95fb55c57";

const mealReducer = (prevState, action) => {
  if (action.type === "SEARCH") {
    const filteredArr = DEFAULT_STATE.meals.filter((meal) => {
      return meal.name.startsWith(action.word);
    });
    return {
      meals: filteredArr,
    };
  } else if (action.type === "FETCH_FIRED") {
    return {
      meals: [],
      fetching: true,
      error: null,
    };
  } else if (action.type === "FETCH_SUCCESS") {
    const val = {
      meals: action.response,
      fetching: false,
      error: null,
    };
    DEFAULT_STATE = val;
    return val;
  } else if (action.type === "FETCH_ERROR") {
    return {
      meals: [],
      fetching: false,
      error: action.err,
    };
  } else if (action.type === "CLEAR_ADD") {
    prevState.meals.forEach((meal) => {
      meal.added = false;
    });
    const newMeals = [...prevState.meals];
    return {
      meals: newMeals,
      fetching: false,
      error: prevState.error
    }
  } else {
    const indexOfItem = prevState.meals.findIndex((meal) => {
      return action.id === meal.id;
    });
    console.log("Added", indexOfItem);
    const copyArr = {
      ...prevState,
      meals: [...prevState.meals],
    };
    console.log("Added", copyArr);
    if (action.type === "MARK_ADD") {
      copyArr.meals[indexOfItem].added = true;
    } else if (action.type === "REMOVE_ADD") {
      copyArr.meals[indexOfItem].added = false;
    }
    return copyArr;
  }
  return {};
};
const MealContextProvider = (props) => {
  const config = {
    url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`,
    method: "GET",
  };
  const transformFn = (item) => {
    return {
      amount: 1,
      added: false,
      id: item.id,
      name: item.title,
      description: "Fresh Meal on your way!",
      price: (Math.random() * 100).toFixed(2),
      imageUrl: item.image,
    };
  };

  useEffect(async () => {
    dispatchMeal({ type: "FETCH_FIRED" });
    try {
      let transformedRes;
      if (configration.fetchDummyData) {
        transformedRes = DUMMY_MEALS;
      } else {
        const respone = await fetch(config.url);
        const data = await respone.json();
        console.log("Data", data);
        transformedRes = data.results.map((item) => {
          return transformFn(item);
        });
      }

      dispatchMeal({ type: "FETCH_SUCCESS", response: transformedRes });
    } catch (err) {
      console.log("Error occured", err);
      dispatchMeal({ type: "FETCH_ERROR", err: err });
    }
  }, []);

  const [mealState, dispatchMeal] = useReducer(mealReducer, {
    meals: [],
    fetching: false,
    error: null,
  });

  const markAddedHandler = (id) => {
    dispatchMeal({ type: "MARK_ADD", id: id });
  };

  const removeAddedHandler = (id) => {
    dispatchMeal({ type: "REMOVE_ADD", id: id });
  };

  const searchItemHandler = (word) => {
    dispatchMeal({ type: "SEARCH", word: word });
  };

  const clearAddedHandler = () => {
    dispatchMeal({ type: "CLEAR_ADD" })
  }
  const mealContext = {
    meals: mealState.meals,
    fetching: mealState.fetching,
    error: mealState.error,
    markAdded: markAddedHandler,
    removeAdded: removeAddedHandler,
    searchItems: searchItemHandler,
    clearAdded: clearAddedHandler
  };
  return (
    <MealContext.Provider value={mealContext}>
      {props.children}
    </MealContext.Provider>
  );
};

export default MealContextProvider;
