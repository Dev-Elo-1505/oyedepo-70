import { NavLink } from "react-router-dom";

interface Props {
  isOpen: boolean;
  handleToggle: () => void;
}

const MenuItems = ({ isOpen, handleToggle }: Props) => {
    const menuClasses = `lg:flex lg:items-center lg:gap-8 ${
        isOpen ? 'block' : 'hidden'
      } absolute lg:relative top-full left-0 right-0 lg:top-0 lg:left-auto lg:right-auto bg-white lg:bg-transparent w-full lg:w-auto shadow lg:shadow-none z-10`;

  const menuItems = ["About", "Quotes", "Sermons", "Timelines"];

  return (
    <ul className={menuClasses}>
      {menuItems.map((item) => (
        <li key={item} className="px-4 py-2 lg:px-0 lg:py-0">
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2 border-red-500" : "border-none"
            }
            to={`/${item.toLowerCase()}`}
            onClick={handleToggle}
          >
            {item}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
