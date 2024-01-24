import { useEffect, useState } from "react";
import { useCart } from "../hooks/CartProvider";

const ProductCard = ({ product }) => {
  const { id, title, image, price } = product;
  const { cart, setCart } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      if (cart.some((pro) => pro.id === product.id)) {
        setIsProductInCart(true);
      }
    }
  }, []);

  const addToCartHandler = (product) => {
    if (!cart.some((pro) => pro.id === product.id)) {
      setCart((prevCart) => [...prevCart, product]);
      setIsProductInCart(true);
    }
  };
  const removeHandler = (product) => {
    const itemsInCart = cart.filter((pro) => pro.id !== product.id);
    setCart([...itemsInCart]);
    setIsProductInCart(false);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border">
      <img src={image} className="w-full h-40 object-contain" />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>

        <p className="text-gray-700 text-base">₹{price}</p>
      </div>

      <div className="px-6 pb-4">
        <button
          className={`bg-blue-500 text-white font-bold py-1 px-2 rounded-md ${
            isProductInCart ? "bg-gray-300" : "bg-blue-500 text-white"
          }`}
          onClick={() => addToCartHandler(product)}
          disabled={isProductInCart}
        >
          Add to Cart
        </button>

        <button
          className={`bg-gray-300 text-white px-2 py-1 rounded-md ml-3 ${
            isProductInCart && "bg-red-500"
          }`}
          onClick={() => removeHandler(product)}
          disabled={!isProductInCart}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
