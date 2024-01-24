import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Review from "./pages/Review";
import Error from "./pages/Error";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Products />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="review" element={<Review />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
