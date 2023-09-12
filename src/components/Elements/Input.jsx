import PropTypes from "prop-types";

const Input = (props) => {
  const { name, type, placeholder, variant, children } = props;

  function getVariant() {
    if (variant === "dark") {
      return `bg-slate-800 text-white`;
    } else if (variant === "light") {
      return `bg-slate-100 text-slate-800`;
    }
  }

  return (
    <div>
      <label htmlFor={name} className="text-xs mb-2 block">
        {children}
      </label>
      <input id={name} name={name} type={type} placeholder={placeholder} className={`w-full px-4 py-2 rounded-md ${getVariant()}`} />
    </div>
  );
};

Input.defaultProps = {
  variant: "dark",
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Input;
