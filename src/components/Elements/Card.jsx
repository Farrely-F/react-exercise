import Button from "./Button";
import PropTypes from "prop-types";

const Card = (props) => {
  const { children } = props;
  return (
    <>
      <div className="mx-auto p-5 max-w-xs flex flex-col gap-y-2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 hover:bg-opacity-20 border border-gray-100/20 transition-all ease-in-out duration-500">
        {children}
      </div>
    </>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <>
      <img className="w-full h-40 min-h-[160px] object-cover rounded-md" src={image} alt="shoes" />
    </>
  );
};

const Body = (props) => {
  const { children, title, category } = props;
  return (
    <>
      <div className="h-full">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-xs px-2 bg-emerald-600 inline-flex rounded-xl">{category}</p>
        <p className="text-slate-300 text-justify text-sm mb-4">{children}</p>
      </div>
    </>
  );
};

const Footer = (props) => {
  const { children, handleAddToCart, id } = props;
  return (
    <>
      <div className="flex items-center justify-between">
        <Button onClick={() => handleAddToCart(id)} style="text-xs flex gap-1 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12">
            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="rgba(0,0,0,1)"></path>
          </svg>
          Cart
        </Button>
        <p className="font-bold text-slate-200">{children}</p>
      </div>
    </>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;

Card.propTypes = {
  children: PropTypes.node,
};

Header.propTypes = {
  image: PropTypes.string,
};

Body.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  category: PropTypes.string,
};

Footer.propTypes = {
  children: PropTypes.node,
  handleAddToCart: PropTypes.func,
  id: PropTypes.number,
};
