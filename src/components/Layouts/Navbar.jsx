import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex justify-between items-center bg-black/50 border-b border-white/20 backdrop-blur-sm text-white px-8 md:px-16 sticky top-0 z-50">
      <h2 className="font-bold text-lg">Shoezis</h2>
      <div className="flex gap-4 items-center">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/login">
          <Button style={`text-sm shadow-[0_0px_20px_rgba(240,_46,_170,_0.7)] md:px-8`}>Login</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
