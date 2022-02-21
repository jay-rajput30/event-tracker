import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import "./Header.css";

const Header = () => {
  return (
    <header className="header--container">
      <IconContext.Provider value={{ className: "header--icon" }}>
        <FiArrowLeft />
      </IconContext.Provider>
      <h3 className="header--title">February 2022</h3>
      <IconContext.Provider value={{ className: "header--icon" }}>
        <FiArrowRight />
      </IconContext.Provider>
    </header>
  );
};

export default Header;
