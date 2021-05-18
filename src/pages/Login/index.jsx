import { useState } from 'react';
import Cookies from 'js-cookie';


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


  const handleSubmit = (event) => {
    event.preventDefault();
    fetchLogin()
  };

  
  return (
    <div className="Login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Identifiant (email ou username)</label>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </div>
        <div>
          <label>Mot de passe</label>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <button className="btn" type="submit" onClick={changeConnect}>Connection</button>
      </form>
    </div>
  );
};

export default Login;