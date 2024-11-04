import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer, Bounce } from "react-toastify"; // Import Bounce for transition
import "react-toastify/dist/ReactToastify.css";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto px-2 min-h-[calc(100vh-548px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} // Correct syntax for transition prop
      />
    </div>
  );
};

export default MainLayout;
