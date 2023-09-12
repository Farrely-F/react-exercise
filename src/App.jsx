// Main Component AKA Root Component

import { Outlet } from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";

// Root Element
function App() {
  return (
    <>
      <Navbar />
      <div className="text-white w-full flex flex-col items-center justify-center min-h-screen p-8 md:px-16">
        {/* Outlet is the child component of root that will be rendered into the main page */}
        <Outlet />
      </div>
    </>
  );
}

export default App;
