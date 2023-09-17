// Main Component AKA Root Component

import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";

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
          <section className="max-sm:py-16 max-sm:flex-col-reverse flex w-full m-auto hero">
            <div className="max-sm:w-full w-1/2 min-h-[50vh] flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-2">Modern Store, Easy and Convenient</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis optio itaque tempore provident dolorum ducimus qui voluptatum deserunt nobis quos!</p>
              <Link to="/products" className="bg-slate-300 hover:bg-slate-100 text-black px-4 py-2 rounded-md mt-4 max-w-fit">
                Buy Now!
              </Link>
            </div>
            <div className="max-sm:w-full w-1/2 h-1/2 flex justify-center relative">
              <img src="https://www.transparentpng.com/thumb/adidas-shoes/a4xO3G-adidas-shoes-adidas-shoe-kids-superstar-daddy-grade.png" alt="hero image" className="z-10" />
              <div className="absolute max-sm:h-56 h-80 aspect-square bg-gray-400 rounded-[0_56px_0_56px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100/20 translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2"></div>
            </div>
          </section>
        )}
        {/* Outlet is the child component of root that will be rendered into the main page */}
        <Outlet />
      </div>
    </>
  );
}

export default App;
