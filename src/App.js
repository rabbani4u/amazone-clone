import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./layout/Footer/Footer";
import Checkout from "./Checkout";
const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
};
export default App;
