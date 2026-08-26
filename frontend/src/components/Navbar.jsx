import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <h2>Ennan</h2>

      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
}

export default Navbar;