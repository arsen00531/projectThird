import { NavLink } from "react-router";
import "./styles/header.css";
import useIsActiveHome from "../../shared/hooks/useIsActiveHome";
const Header = () => {
    const isActive = useIsActiveHome();
  return (
    <header className="bg-black w-full flex shadow-md">
      <div className="container py-2 flex justify-between items-center">
        <div className="flex gap-5">
          <NavLink
            className={isActive ? 'text-blue-600 underline' : 'text-gray-600'}
            to="/"
          >
            Main
          </NavLink>
          <NavLink
            className={
              ({ isActive }) =>
                isActive
                  ? "text-blue-600 underline font-bold" 
                  : "text-gray-600 hover:text-gray-900" 
            }
            to="/about"
          >
            About
          </NavLink>
        </div>

        <div className="rounded-lg border-2 border-solid border-white p-2">
          <a
            className="text-xl font-bold text-white font-sans"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/SecondNiceee/projectThree"
          >
            Repository
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
