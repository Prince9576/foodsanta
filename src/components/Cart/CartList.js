import CartItem from "./CartItem";
import styles from "./CartList.module.css";

const CartList = (props) => {
  const DUMMY_CART = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      imageUrl:
        "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg",
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      imageUrl:
        "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home.jpg",
    },
  ];
  return (
    <div className={styles["cart-list"]}>
      {DUMMY_CART.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default CartList;
