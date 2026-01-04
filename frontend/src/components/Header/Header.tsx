import Cart from "../Cart/Cart";

const Header = () => {
  return (
      <div className="flex justify-between px-2 py-3 bg-red-800 sm:px-10">
        <div className="text-white text-3xl">Bijukchhe Meals</div>
        <Cart />
      </div>
  );
};

export default Header;
