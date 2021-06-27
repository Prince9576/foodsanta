import Main from "./Main";
import Side from "./Side";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <main>
      <section className={styles.main}>
        <Main />
      </section>
      <section className={styles.side}>
        <Side />
      </section>
    </main>
  );
};

export default Layout;
