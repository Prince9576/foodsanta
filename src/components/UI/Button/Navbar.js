import { useContext } from "react";
import CartContext from "../../../store/CartContext";
import styles from "./Navbar.module.css";
import Scroll from 'react-scroll';
const Link = Scroll.Link

const Navbar = () => {
  const cartCtx = useContext(CartContext);
  return (
    <div className={styles.navbar}>
      <Link smooth={true} duration={700} activeClass="active" to="my-orders" >
        <div className={styles["cart-wrapper"]}>
          <i className={`fas fa-shopping-cart ${styles.icon}`}></i>
          <div className={styles["notifications"]}>{cartCtx.items.length}</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
