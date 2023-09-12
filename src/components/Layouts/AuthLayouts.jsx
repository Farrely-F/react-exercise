import { Link } from "react-router-dom";
import { LoginForm, RegisterForm } from "../Fragments/Form";

export const LoginLayout = () => {
  return (
    <div className="text-white w-full flex flex-col items-center">
      <div className="w-full max-w-sm flex flex-col gap-y-2">
        <h1 className="font-bold text-3xl">Login</h1>
        <p className="text-slate-300 mb-2">Hello! please login with your credentials</p>
        <LoginForm />
        <p className="text-center text-slate-300 mt-4 text-xs">
          {`Already have account? `}
          <Link to="/register" className=" hover:text-white hover:underline hover:underline-offset-4">
            Register Instead
          </Link>
        </p>
      </div>
    </div>
  );
};

export const RegisterLayout = () => {
  return (
    <div className="text-white w-full flex flex-col items-center">
      <div className="w-full max-w-sm flex flex-col gap-y-2">
        <h1 className="font-bold text-3xl">Register</h1>
        <p className="text-slate-300 mb-2">Hello! please register with your credentials</p>
        <RegisterForm />
        <p className="text-center text-slate-300 mt-4 text-xs">
          {`Already have account? `}
          <Link to="/login" className=" hover:text-white hover:underline hover:underline-offset-4">
            Login instead
          </Link>
        </p>
      </div>
    </div>
  );
};
