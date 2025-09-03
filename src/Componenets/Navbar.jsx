import { useContext, useState } from "react";
import { Phone, Clock, Mail, Menu, X } from "lucide-react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {user,logOut} = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

 
  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/doctors">Doctors</Link>
      </li>
      
    </>
  );

  return (
    <div className="w-full fixed z-30 shadow-sm bg-white">


      <div className="navbar bg-white text-gray-800 px-6 lg:px-12">
        {/* Left: Logo */}
        <div className="navbar-start">
          <a className="text-2xl font-semibold flex items-center gap-1">
            <span className="text-blue-500">Medi</span>
            <span className="text-black">Clinic</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-gray-700 gap-6">
            {navItem}
          </ul>
        </div>

     <div className="navbar-end">
          {user ? (
            <div className="relative">
              <img
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-12 h-12 rounded-full cursor-pointer border-[#FFB200] border-3"
                src={user.photoURL || "https://via.placeholder.com/150"}
                alt="Profile"
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 p-2">
                  <div className="px-4 py-2 text-sm text-gray-700 font-bold text-center">
                    {user.displayName}
                  </div>
                  <hr />
                  <Link
                    to="/dashboard"
                    className="btn btn-error w-full mt-2 hover:bg-black"
                  >
                    <div className="flex gap-1 items-center">
                      <img
                        className="w-5"
                        src="https://cdn-icons-png.freepik.com/256/16596/16596825.png?ga=GA1.1.94081497.1723952170&semt=ais_hybrid"
                        alt=""
                      />
                      <p className="text-white ">Dashboard</p>
                    </div>
                  </Link>
                  <button
                    onClick={logOut}
                    className="w-full text-left px-4 py-2 text-sm text-white hover:bg-black font-bold btn btn-primary mt-2"
                  >
                    <div className="flex items-center gap-1">
                      <img
                        className="w-5"
                        src="https://cdn-icons-png.freepik.com/256/10977/10977462.png?ga=GA1.1.94081497.1723952170&semt=ais_hybrid"
                        alt=""
                      />
                      <p>Logout</p>
                    </div>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/auth/login">
              <p className="text-[#0099FF] p-7 font-bold hover:text-black text-xl">Login</p>
            </Link>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4">
          <ul className="flex flex-col gap-3 font-medium text-gray-700">
            {navItem}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
