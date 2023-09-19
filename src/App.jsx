// Main Component AKA Root Component

import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";

const productsInformation = [
  {
    title: "Unmatched Selection",
    description: "From athletic performance to casual chic, our diverse range covers all your footwear needs. Find the perfect pair for any occasion.",
    icon: "M17.0007 1.20801 18.3195 3.68083 20.7923 4.99968 18.3195 6.31852 17.0007 8.79134 15.6818 6.31852 13.209 4.99968 15.6818 3.68083 17.0007 1.20801ZM8.00065 4.33301 10.6673 9.33301 15.6673 11.9997 10.6673 14.6663 8.00065 19.6663 5.33398 14.6663.333984 11.9997 5.33398 9.33301 8.00065 4.33301ZM19.6673 16.333 18.0007 13.208 16.334 16.333 13.209 17.9997 16.334 19.6663 18.0007 22.7913 19.6673 19.6663 22.7923 17.9997 19.6673 16.333Z",
  },
  {
    title: "Quality Craftmanship",
    description: "We believe in only offering shoes that meet the highest standards of craftsmanship and durability. Each pair is meticulously designed for long-lasting comfort.",
    icon: "M2 8.99997H5V21H2C1.44772 21 1 20.5523 1 20V9.99997C1 9.44769 1.44772 8.99997 2 8.99997ZM7.29289 7.70708L13.6934 1.30661C13.8693 1.13066 14.1479 1.11087 14.3469 1.26016L15.1995 1.8996C15.6842 2.26312 15.9026 2.88253 15.7531 3.46966L14.5998 7.99997H21C22.1046 7.99997 23 8.8954 23 9.99997V12.1043C23 12.3656 22.9488 12.6243 22.8494 12.8658L19.755 20.3807C19.6007 20.7554 19.2355 21 18.8303 21H8C7.44772 21 7 20.5523 7 20V8.41419C7 8.14897 7.10536 7.89462 7.29289 7.70708Z",
  },
  {
    title: "Effortless Shopping",
    description: "Our user-friendly interface ensures a seamless shopping experience. Filter by size, style, color, and more, making it easy to find your perfect fit.",
    icon: "M15.3709 3.43994L18.5819 9.00194L22.0049 9.00212V11.0021L20.8379 11.0019L20.0813 20.0852C20.0381 20.6035 19.6048 21.0021 19.0847 21.0021H4.92502C4.40493 21.0021 3.97166 20.6035 3.92847 20.0852L3.17088 11.0019L2.00488 11.0021V9.00212L5.42688 9.00194L8.63886 3.43994L10.3709 4.43994L7.73688 9.00194H16.2719L13.6389 4.43994L15.3709 3.43994ZM13.0049 13.0021H11.0049V17.0021H13.0049V13.0021ZM9.00488 13.0021H7.00488V17.0021H9.00488V13.0021ZM17.0049 13.0021H15.0049V17.0021H17.0049V13.0021Z",
  },
];

// Root Element
function App() {
  const location = useLocation();

  // Check if the current location is the home route ('/')
  const isHomeRoute = location.pathname === "/";

  // If it's not the home route, navigate to it

  return (
    <>
      <Navbar />
      <div className="text-white w-full flex flex-col items-center min-h-screen p-8 md:p-16">
        {isHomeRoute && (
          <>
            <section className="max-sm:py-16 max-sm:flex-col-reverse flex w-full m-auto hero">
              <div className="max-sm:w-full w-1/2 md:min-h-screen flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-2">Modern Store, Easy and Convenient</h1>
                <p>Discover the perfect blend of comfort, style, and quality footwear at Runnerz. Step into a world of endless possibilities, where we curate the finest collection of shoes to complement every lifestyle.</p>
                <Link to="/products" className="bg-slate-300 hover:bg-slate-100 text-black px-4 py-2 rounded-md mt-4 max-w-fit">
                  Buy Now!
                </Link>
              </div>
              <div className="max-sm:w-full w-1/2 md:min-h-[50%] flex justify-center relative">
                <img src="https://www.transparentpng.com/thumb/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png" alt="hero image" className="z-10 object-contain" />
                <div className="absolute max-sm:h-56 h-80 aspect-square bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-yellow-500 via-purple-500 to-blue-500 blur-3xl opacity-70 translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2"></div>
              </div>
            </section>
            <div className="min-h-screen w-full py-16 md:flex gap-2">
              <div className="md:w-1/2 p-1 flex flex-col justify-center mb-4 md:pr-4">
                <h2 className="font-bold text-5xl mb-4">Why Us?</h2>
                <p className="mb-4">Stay in the loop! Connect with us on for daily inspiration, behind-the-scenes peeks, and exciting giveaways. Ready to put your best foot forward? Start exploring our collection now!</p>
                <p>Join our community and be the first to hear about special promotions, new arrivals, and style tips. Sign up now to elevate your shoe game.</p>
              </div>
              <div className="md:w-1/2 p-1 flex flex-col justify-center mx-auto">
                {productsInformation.map((product, index) => (
                  <div key={index + 1} className="p-4 hover:bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm hover:bg-opacity-10 hover:border border-b border-gray-100/20 transition-all ease-in-out duration-300 mb-4">
                    <div className="flex gap-2 items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d={product.icon} />
                      </svg>
                      <h3 className="font-bold text-xl">{product.title}</h3>
                    </div>
                    <p>{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {/* Outlet is the child component of root that will be rendered into the main page */}
        <Outlet />
      </div>
    </>
  );
}

export default App;
