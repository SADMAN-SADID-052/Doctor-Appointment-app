import { useState } from "react";
import { Phone, Clock, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItem = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Doctors</a>
      </li>
      <li>
        <a>Departments</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Shop</a>
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

        <div className="navbar-end flex gap-4">
          <button className="font-bold text-xl">Login</button>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6 cursor-pointer" />
            ) : (
              <Menu className="w-6 h-6 cursor-pointer" />
            )}
          </button>
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
