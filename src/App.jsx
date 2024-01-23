import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Review from "./pages/Review";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Products />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="review" element={<Review />} />
      </Route>
    </Routes>
  );
};

export default App;
