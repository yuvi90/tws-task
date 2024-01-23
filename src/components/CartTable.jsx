import { useCart } from "../hooks/CartProvider";

const CartTable = () => {
  const { cart } = useCart();

  // Calculate the total price of all items in the cart
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="w-full border border-collapse mb-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">Product</th>
                <th className="py-2 px-4">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td className="py-2 px-4">{product.title}</td>
                  <td className="py-2 px-4">₹{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end">
            <div className="font-bold text-xl">Total: ₹{total}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartTable;
