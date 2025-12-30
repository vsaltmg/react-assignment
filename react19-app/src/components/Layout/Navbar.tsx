
import { NavLink } from "react-router-dom";
import "./Navbar.css"; 

const Navbar: React.FC = () => {
  return (
    <nav className="navbar" style={{ height: "60px" }}>
      <h1 className="logo">Personal Finance & Weather </h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/expenses" className={({ isActive }) => (isActive ? "active" : "")}>
            Expenses
          </NavLink>
        </li>
        <li style={{ marginRight: "46px" }}>
          <NavLink to="/weather" className={({ isActive }) => (isActive ? "active" : "")}>
            Weather
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
