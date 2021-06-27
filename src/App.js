import "./App.css";
import Layout from "./components/Layout/Layout";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <Layout />
    </CartContextProvider>
  );
}

export default App;
