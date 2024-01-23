import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 p-5 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/">
            <h1 className="text-2xl font-bold">Shopper</h1>
          </Link>
          <Link to={"checkout"}>Checkout</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
