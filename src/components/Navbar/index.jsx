import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <h1><Link to="/">Social Media</Link></h1>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/register">S'inscrire</Link></li>
        <li><Link to="/login">Connection</Link></li>
        <li><Link to="/">Déconnection</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;