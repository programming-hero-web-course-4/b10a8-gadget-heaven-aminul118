import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-400 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
        <p className="mt-2 text-lg">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button
          onClick={handleGoHome}
          className="mt-6 bg-white text-orange-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition duration-300"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
