import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  return (
    <nav className='navbarStyle'>
      <Link to='/' className={location.pathname === "/" ? "linkStyle isLocationActive" : "linkStyle"}>
        Home
      </Link>
      <Link to='/form' className={location.pathname === "/form" ? "linkStyle isLocationActive" : "linkStyle"}>
        Form
      </Link>
      <Link to='/list' className={location.pathname === "/list" ? "linkStyle isLocationActive" : "linkStyle"}>
        Lista
      </Link>
    </nav>
  );
}
