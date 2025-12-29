
import { NavLink } from "react-router-dom";
// import "./Navbar.css"; // Optional for styling

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Finance & Weather</h2>
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
        <li>
          <NavLink to="/weather" className={({ isActive }) => (isActive ? "active" : "")}>
            Weather
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
