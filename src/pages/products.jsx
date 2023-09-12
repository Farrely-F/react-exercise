import Card from "../components/Elements/Card";

const shoes = [
  {
    id: 1,
    name: "Nike Air Max 90",
    category: "Running",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, earum?",
    price: 250000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Nike Air Jordan 1",
    category: "Casual",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, earum?",
    price: 500000,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80",
  },
  {
    id: 3,
    name: "Puma RS-X3 Puzzle",
    category: "Casual",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, earum?",
    price: 500000,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
  },
  {
    id: 4,
    name: "Nike Air Force 1 '07 LV8",
    category: "Casual",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, earum?",
    price: 500000,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
  },
];

const Products = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center text-3xl font-bold mb-8">Our Latest Products:</h2>
      <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-1">
        {/* Non-Iterate */}

        {/* <Card>
          <Card.Header image={"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"} />
          <Card.Body title="Shoes" category="Running">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, earum?
          </Card.Body>
          <Card.Footer>Rp250.000</Card.Footer>
        </Card> */}

        {/* Iteration */}

        {shoes.length > 0 &&
          shoes.map((shoe) => (
            <Card key={shoe.id}>
              <Card.Header image={shoe.image} />
              <Card.Body title={shoe.name} category={shoe.category}>
                {shoe.description}
              </Card.Body>
              <Card.Footer>Rp{shoe.price}</Card.Footer>
            </Card>
          ))}
      </div>
      {shoes.length < 1 && <p className="text-center text-sm font-bold mb-8">No Products Found!</p>}
    </div>
  );
};

export default Products;
