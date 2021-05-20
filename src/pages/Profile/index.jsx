import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';


const Profile = ({ isConnect }) => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");


  const fetchProfile = () => {
    fetch("http://localhost:1337/users/me", {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`, 
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
    });
  };


  useEffect(() => {
    fetchProfile()
  }, []);
  

  const fetchUpdate = () => {
    const data2 = {
      username: username,
      description: description
    }
    fetch(`http://localhost:1337/users/me`, {
      method: 'put',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`, 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data2)
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
    });
  };


  const handleClick = (e) => {
    e.preventDefault();
    fetchUpdate()
  };


  return (
    <div className="Profile">
      <div>
        <h2>Mon profil</h2>
        <p>Username : {data.username}</p>
        <p>Email : {data.email}</p>
        <p>Description : {data.description}</p>
      </div>
      <form>
        <div>
          <label>Username</label>
          <input type="text" onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" onChange={e => setDescription(e.target.value)} />
        </div>
        <br></br>
        <Link to="/" className="btn" onClick={handleClick}>Modifier</Link>
      </form>
    </div>
  );
};

export default Profile;