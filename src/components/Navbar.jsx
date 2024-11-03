import { NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const navbarLinks = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/statistics`}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to={`dashboard`}>Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar container mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 py-2 shadow gap-4"
            >
              {navbarLinks}
            </ul>
          </div>
          <NavLink to={"/"} className=" text-xl font-bold">
            Gadget Heaven
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-base gap-2">
            {navbarLinks}
          </ul>
        </div>
        <div className="navbar-end text-2xl gap-4 text-white">
          <NavLink className={`bg-blue-500 p-3 rounded-full`}>
            <IoMdCart />
          </NavLink>
          <NavLink className={`bg-blue-500 p-3 rounded-full`}>
            <FaRegHeart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
