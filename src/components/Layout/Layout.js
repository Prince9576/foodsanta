import Main from "./Main";
import Side from "./Side";
import styles from "./Layout.module.css";
import MealContextProvider from "../../store/MealContextProvider";

const Layout = (props) => {
  return (
    <MealContextProvider>
      <main>
        <section className={styles.main}>
          <Main />
        </section>
        <section className={styles.side}>
          <Side />
        </section>
      </main>
    </MealContextProvider>
  );
};

export default Layout;
