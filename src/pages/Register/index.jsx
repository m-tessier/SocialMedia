import { useState } from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const fetchRegister = () => {
    const data = {
      username: username,
      email: email,
      password: password
    };
    
    fetch("http://localhost:1337/auth/local/register", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
    });
  };
  
  
  return (
    <div className="Register">
      <h2>S'inscrire</h2>
      <form>
        <div>
          <label>Username</label>
          <input type="text" onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Mot de passe</label>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <Link to="/" className="btn" onClick={fetchRegister}>S'inscrire</Link>
      </form>
    </div>
  );
};
export default Register;