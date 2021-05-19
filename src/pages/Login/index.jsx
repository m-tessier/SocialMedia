import { useState } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';


const Login = ({ isConnect, changeConnect }) => {
  const [identifier, setUserName] = useState("");
  const [password, setPassword] = useState("");
  

  const fetchLogin = () => {
    const data = {
      identifier: identifier,
      password: password
    }
    fetch("http://localhost:1337/auth/local", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((response) => {
        Cookies.set('token', `${response.jwt}`)
    });
  };


  const handleClick = () => {
    fetchLogin()
    changeConnect()
  };

  
  return (
    <div className="Login">
      <h2>Se connecter</h2>
      <form>
        <div>
          <label>Identifiant (email ou username)</label>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </div>
        <div>
          <label>Mot de passe</label>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <Link to="/" className="btn" onClick={handleClick}>S'inscrire</Link>
      </form>
    </div>
  );
};

export default Login;