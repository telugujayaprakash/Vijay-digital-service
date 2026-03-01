import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-slate-800">
      <div className="text-center card-soft p-8 md:p-6">
        <h1 className="mb-4 text-7xl font-bold text-primary">404</h1>
        <p className="mb-8 text-xl text-slate-500">Oops! Page not found</p>
        <a href="/" className="btn-primary-soft max-w-xs mx-auto">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
