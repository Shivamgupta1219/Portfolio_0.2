import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="text-center px-6">
        <h1 className="mb-4 text-6xl font-bold text-blue-500">
          404
        </h1>

        <p className="mb-6 text-xl text-gray-400">
          Oops! Page not found 😕
        </p>

        <a
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
