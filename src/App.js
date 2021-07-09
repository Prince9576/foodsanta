import "./App.css";
import Layout from "./components/Layout/Layout";
import CartContextProvider from "./store/CartContextProvider";
import { MobileView } from "react-device-detect";
import Navbar from "./components/UI/Button/Navbar";

function App() {
  return (
    <CartContextProvider>
      <MobileView>
        <Navbar></Navbar>
      </MobileView>
      <Layout />
    </CartContextProvider>
  );
}

export default App;
