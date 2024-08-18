import { useState } from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import MenuItems from "./MenuItems";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex items-center justify-between px-11 lg:px-28 py-4 w-full shadow font-sarala">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          className="w-10 h-10 object-contain"
          alt="Winner's Chapel Logo"
        />
        <Link to="/">
          <h2 className="font-bold">OYEDEPO@70</h2>
        </Link>
      </div>
      <div className="lg:hidden">
        <button onClick={handleToggle} aria-label={isOpen ? 'Close Menu' : 'Open Menu'}>
            {isOpen ? (<MdClose className="text-3xl text-black cursor-pointer" />):(<MdMenu className="text-3xl text-black cursor-pointer" />)}
        </button>
      </div>
      <MenuItems isOpen={isOpen} handleToggle={handleToggle} />
    </nav>
  );
};

export default NavBar;
