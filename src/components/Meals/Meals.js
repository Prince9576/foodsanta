import { useEffect } from "react";
import Meal from "./Meal";
import styles from "./Meals.module.css";
const Meals = (props) => {
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Pizza",
      description: "Cheesy Pizza on the way",
      price: 22.99,
      imageUrl:
        "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg",
    },
    {
      id: "m2",
      name: "Pasta",
      description: "Give yourself a saucy treat",
      price: 16.5,
      imageUrl:
        "https://pinchofyum.com/wp-content/uploads/Vegan-Vodka-Pasta-Square.jpg",
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      imageUrl:
        "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/exps28800_UG143377D12_18_1b_RMS.jpg",
    },
    {
      id: "m4",
      name: "Samosa",
      description: "Potato Filled with love",
      price: 18.99,
      imageUrl:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-500x500.jpg",
    },
    {
      id: "m5",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1200px-Sushi_platter.jpg",
    },
    {
      id: "m6",
      name: "Schnitzel",
      description: "Fresh Meat!",
      price: 16.5,
      imageUrl:
        "https://qph.fs.quoracdn.net/main-qimg-9fbe6d471e0412548359a05a80858a7a",
    },
  ];
  useEffect(() => {
    DUMMY_MEALS.forEach((meal) => {
      meal["amount"] = 1;
      meal["added"] = false;
    });
  });
  return DUMMY_MEALS.map((meal) => {
    return <Meal key={meal.id} meal={meal} />;
  });
};

export default Meals;
