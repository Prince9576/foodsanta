import { useReducer } from "react";
import MealContext from "./MealContext";

const DEFAULT_STATE = {
  meals: [
    {
      amount: 1,
      added: false,
      id: "m1",
      name: "Pizza",
      description: "Cheesy Pizza on the way",
      price: 22.99,
      imageUrl:
        "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg",
    },
    {
      amount: 1,
      added: false,
      id: "m2",
      name: "Pasta",
      description: "Give yourself a saucy treat",
      price: 16.5,
      imageUrl:
        "https://pinchofyum.com/wp-content/uploads/Vegan-Vodka-Pasta-Square.jpg",
    },
    {
      amount: 1,
      added: false,
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      imageUrl:
        "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps28800_UG143377D12_18_1b_RMS.jpg",
    },
    {
      amount: 1,
      added: false,
      id: "m4",
      name: "Samosa",
      description: "Potato Filled with love",
      price: 18.99,
      imageUrl:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-500x500.jpg",
    },
    {
      amount: 1,
      added: false,
      id: "m5",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1200px-Sushi_platter.jpg",
    },
    {
      amount: 1,
      added: false,
      id: "m6",
      name: "Schnitzel",
      description: "Fresh Meat!",
      price: 16.5,
      imageUrl:
        "https://qph.fs.quoracdn.net/main-qimg-9fbe6d471e0412548359a05a80858a7a",
    },
  ],
};

const mealReducer = (prevState, action) => {
  if (action.type === "SEARCH") {
    const filteredArr = DEFAULT_STATE.meals.filter((meal) => {
      return meal.name.startsWith(action.word);
    });
    return {
      meals: filteredArr,
    };
  } else {
    const indexOfItem = prevState.meals.findIndex((meal) => {
      return action.id === meal.id;
    });
    const copyArr = [...prevState.meals];
    if (action.type === "MARK_ADD") {
      copyArr[indexOfItem].added = true;
    } else if (action.type === "REMOVE_ADD") {
      copyArr[indexOfItem].added = false;
    }
  }

  return DEFAULT_STATE;
};
const MealContextProvider = (props) => {
  const [mealState, dispatchMeal] = useReducer(mealReducer, DEFAULT_STATE);

  const markAddedHandler = (id) => {
    dispatchMeal({ type: "MARK_ADD", id: id });
  };

  const removeAddedHandler = (id) => {
    dispatchMeal({ type: "REMOVE_ADD", id: id });
  };

  const searchItemHandler = (word) => {
    dispatchMeal({ type: "SEARCH", word: word });
  };
  const mealContext = {
    meals: mealState.meals,
    markAdded: markAddedHandler,
    removeAdded: removeAddedHandler,
    searchItems: searchItemHandler,
  };
  return (
    <MealContext.Provider value={mealContext}>
      {props.children}
    </MealContext.Provider>
  );
};

export default MealContextProvider;
