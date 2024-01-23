import { useLocation } from "react-router-dom";
import { useCart } from "../hooks/CartProvider";

const ReviewSubmitPage = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const { cart } = useCart();

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-2xl font-bold mb-4">Review and Submit Order</h1>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Customer Information</h2>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Phone Number: {formData.phoneNumber}</p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Cart Items</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id}>
              <p>
                {item.title} - ₹{item.price}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewSubmitPage;
