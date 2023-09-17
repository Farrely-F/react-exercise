import { useEffect, useState } from "react";
import Card from "../components/Elements/Card";
import { getShoes } from "../utils/api";
import SkeletonLoader from "../components/Elements/Skeleton";

const Products = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Shoes
  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const res = await getShoes();
        setShoes(res.data.record.shoes);
        // console.log(res.data.record.shoes);
      } catch (error) {
        console.log("error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchShoes();
  }, []);

  // Cart Information
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart) || []);
    }
  }, []);

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

  // Price Formatter
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  // Add to Cart Handler
  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }
  };

  // Clear Cart Handler
  const clearCart = () => {
    if (cart.length > 0) {
      localStorage.removeItem("cart");
      setCart([]);
      window.location.href = "/products";
    }
  };

  return (
    <div className="flex flex-col items-center py-16">
      <h2 className="text-center text-3xl font-bold mb-8">Our Latest Products:</h2>
      <div className="max-sm:flex-col-reverse flex w-full gap-4">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 sm:w-3/4">
          {loading && Array.from({ length: 6 }).map((_, index) => <SkeletonLoader key={index} />)}
          {!loading &&
            shoes.length > 0 &&
            shoes.map((shoe) => (
              <Card key={shoe.id}>
                <Card.Header image={shoe.image} />
                <Card.Body title={shoe.name} category={shoe.category}>
                  {shoe.description}
                </Card.Body>
                <Card.Footer id={shoe.id} handleAddToCart={handleAddToCart}>
                  {shoes.length > 0 && formatPrice(shoe.price)}
                </Card.Footer>
              </Card>
            ))}
        </div>
        <div className="w-full overflow-auto min-h-[50vh] sm:w-1/4 rounded-lg outline-1 outline outline-white/20 p-4">
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-2xl">Cart</h3>
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
              <div>
                <h3 className="font-bold">All Items Price:</h3>
                <p>{formatPrice(totalPrice)}</p>
              </div>
            ) : null}
          </div>
        </div>
        {!loading && shoes.length < 1 && <p className="text-center text-sm font-bold mb-8">No Products Found!</p>}
      </div>
    </div>
  );
};

export default Products;
