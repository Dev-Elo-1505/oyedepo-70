import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex items-center justify-between px-11 lg:px-28 py-4 w-full shadow font-sarala">
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 object-contain"
          src={logo}
          alt="Winner's Chapel Logo"
        />
        <Link to="/">
          <h2 className="font-bold">OYEDEPO@70</h2>
        </Link>
      </div>
      <div className="lg:hidden">
        <div onClick={handleToggle}>
          {isOpen ? (
            <MdClose className="text-3xl text-black cursor-pointer" />
          ) : (
            <MdMenu className="text-3xl text-black cursor-pointer" />
          )}
        </div>
        {isOpen && (<ul className="absolute z-10 bg-white pr-4">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-red-500" : "border-none"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-red-500" : "border-none"
            }
            to="/quotes"
          >
            Quotes
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-red-500" : "border-none"
            }
            to="/about"
          >
            Sermons
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-red-500" : "border-none"
            }
            to="/about"
          >
            Timelines
          </NavLink>
        </li>
      </ul>)}
      </div>

      <ul className="hidden lg:flex lg:items-center lg:gap-8">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-red-500" : "border-none"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-red-500" : "border-none"
            }
            to="/quotes"
          >
            Quotes
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-red-500" : "border-none"
            }
            to="/about"
          >
            Sermons
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-red-500" : "border-none"
            }
            to="/about"
          >
            Timelines
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
