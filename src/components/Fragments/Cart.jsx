import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TotalItems from "../Elements/TotalItems";
import PropTypes from "prop-types";

const Cart = (props) => {
  const { shoes, formatPrice } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate Total Price
  useEffect(() => {
    if (shoes.length > 0 && cart.length > 0) {
      const totalPrice = cart.reduce((acc, curr) => {
        const shoe = shoes.find((shoe) => shoe.id === curr.id);
        return acc + shoe.price * curr.quantity;
      }, 0);
      setTotalPrice(totalPrice);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, shoes]);

  // Clear Cart Handler
  const clearCart = () => {
    if (cart.length > 0) {
      localStorage.removeItem("cart");
      //   setCart([]);
      window.location.href = "/products";
    }
  };

  return (
    <div className="w-full overflow-auto min-h-[50vh] sm:w-1/4 rounded-lg outline-1 outline outline-white/20 p-4">
      <div className="w-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-x-2">
            <h3 className="font-bold text-2xl">Cart</h3>
            <div className="md:hidden flex items-center">
              <TotalItems />
            </div>
          </div>
          <button onClick={clearCart}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
              <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 4V6H15V4H9Z" fill="rgba(255,255,255,1)"></path>
            </svg>
          </button>
        </div>
        <div>
          {shoes.length > 0 &&
            cart.map((item) => {
              const shoe = shoes.find((shoe) => shoe.id === item.id);
              return (
                <div key={item.id} className="h-fit hover:bg-white/5">
                  <div className="flex h-fit items-center justify-between gap-x-2 mb-2 pt-2">
                    <img src={shoe.image} alt="cart item image" className="w-16 h-16 aspect-square object-cover rounded-lg" />
                    <div>
                      <p>{shoe.name}</p>
                      <p className="text-xs">{shoes.length > 0 && formatPrice(shoe.price)}</p>
                    </div>
                    <p className="min-w-[24px]">x {item.quantity}</p>
                  </div>
                  <div className="border-b border-white/25">{/* <p className="text-sm pb-2 border-b border-white/10">Total: {shoes.length > 0 && formatPrice(shoe.price * item.quantity)}</p> */}</div>
                </div>
              );
            })}
          {cart.length < 0 && <p className="text-center text-sm font-bold mb-8">No Products Found!</p>}
        </div>
        {totalPrice > 0 ? (
          <div className="mt-4">
            <h3 className="font-bold">All Items Price:</h3>
            <p>{formatPrice(totalPrice)}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  shoes: PropTypes.array.isRequired,
  formatPrice: PropTypes.func.isRequired,
};
