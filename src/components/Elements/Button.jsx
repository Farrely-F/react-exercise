import PropTypes from "prop-types";

const Button = (props) => {
  const { hover, variant, children, style, onClick = () => {}, type } = props;
  return (
    <>
      <button onClick={onClick} type={type} className={`px-4 py-2 rounded-md bg-${variant} hover:${hover} text-slate-800 font-bold hover:shadow-[0_0px_20px_rgba(240,_46,_170,_0.7)] ${style} transition-all ease-in-out duration-300`}>
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {
  hover: "bg-slate-100",
  variant: "slate-300",
  children: "Button",
};

Button.propTypes = {
  hover: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.string,
  style: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
