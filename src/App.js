import "./App.css";
import Layout from "./components/Layout/Layout";
import CartContextProvider from "./store/CartContextProvider";
import { MobileView } from "react-device-detect";
import Navbar from "./components/UI/Button/Navbar";
import MealContextProvider from "./store/MealContextProvider";
import AddressContextProvider from "./store/AddressContextProvider";


function App() {
  return (
    <AddressContextProvider>
      <MealContextProvider>
        <CartContextProvider>
          <MobileView>
            <Navbar></Navbar>
          </MobileView>
          <Layout />
        </CartContextProvider>
      </MealContextProvider>
    </AddressContextProvider>


  );
}

export default App;
