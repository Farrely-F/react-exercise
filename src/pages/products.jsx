import { useEffect, useState } from "react";
import Card from "../components/Elements/Card";
import { getShoes } from "../utils/api";
import SkeletonLoader from "../components/Elements/Skeleton";
import Cart from "../components/Fragments/Cart";

const Products = () => {
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

  // Price Formatter
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
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
                <Card.Footer id={shoe.id}>{shoes.length > 0 && formatPrice(shoe.price)}</Card.Footer>
              </Card>
            ))}
        </div>
        <Cart shoes={shoes} formatPrice={formatPrice} />
        {!loading && shoes.length < 1 && <p className="text-center text-sm font-bold mb-8">No Products Found!</p>}
      </div>
    </div>
  );
};

export default Products;
