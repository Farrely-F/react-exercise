import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-white w-full flex flex-col items-center justify-center min-h-screen px-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-black">
      <h1 className="text-5xl font-bold mb-5">404</h1>
      <div className="flex flex-col items-center">
        <p>Page not found</p>
        <p>{error.statusText || error.message}</p>
        <Link to={"/"}>Back to Home Screen</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
