import { Link } from 'react-router-dom';


const Navbar = ({ isConnect, changeConnect }) => (
  <header>
    <nav className="d-flex align-items-baseline justify-content-between">
      <h1><Link to="/">Social Media</Link></h1>
      <ul className="d-flex">
        <li><Link to="/">Accueil</Link></li>
        {isConnect 
          ?<>
            <li><Link to="/profile">Profil</Link></li>
            <li><Link to="/" onClick={changeConnect}>Déconnection</Link></li>
          </>
          :<>
            <li><Link to="/register">S'inscrire</Link></li>
            <li><Link to="/login">Connection</Link></li>
          </>
        }
      </ul>
    </nav>
  </header>
);

export default Navbar;