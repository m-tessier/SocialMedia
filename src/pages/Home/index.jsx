import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import Welcome from 'components/Welcome';
import ListOfPosts from 'components/ListOfPosts';


const Home = ({ isConnect }) => {
  const [user, setUser] = useState({});
  console.log(Cookies.get('token'))

  const fetchUser = () => {
    fetch("http://localhost:1337/users/me", {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`, 
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        setUser(response);
    });
  };

  useEffect(() => {
    isConnect && fetchUser();
  }, [isConnect]);


  return (
    <div className="Home">
      <Welcome />
      <br></br>
      <ListOfPosts isConnect={isConnect} user={user} />
    </div>
  );
};

export default Home;