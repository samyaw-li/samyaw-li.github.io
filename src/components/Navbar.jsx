import { Link } from "react-router-dom";
import "./Navbar.css";
import pfp from "../assets/pfp.jpg";

function Navbar() {
  return (
    <aside className="sidebar">
      <img src={pfp} alt="Profile" className="sidebar-pfp" />
      <nav className="sidebar-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/ucla">UCLA</Link>
      </nav>
    </aside>
  );
}

export default Navbar;