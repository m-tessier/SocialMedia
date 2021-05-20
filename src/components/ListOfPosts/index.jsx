import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';


const ListOfPosts = ({ isConnect, user }) => {
  const [listPosts, setListPosts] = useState([]);
  const [text, setText] = useState("");


  const createPost = () => {
    const data2 = {
      text: text,
      user: user.id
    };
    fetch("http://localhost:1337/posts", {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`, 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data2)
    })
      .then((response) => response.json())
      .then(() => showPosts());
  };


  const showPosts = () => {
    fetch("http://localhost:1337/posts?_sort=created_at:desc", {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((response) => {
        setListPosts(response);
    });
  };

  
  useEffect(() => {
    showPosts();
  }, []);


  const deletePost = (id) => {
    fetch(`http://localhost:1337/posts/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${Cookies.get('token')}` }
    })
      .then((response) => response.json())
      .then((response) => {
        setListPosts(listPosts.filter(e => e.id !== response.id))
        showPosts()
      });
  };


  return (
    <div className="ListOfPosts">
      {isConnect
        &&<form>
            <legend>Publier un post</legend>
            <div>
              <label>Post</label>
              <input type="text" onChange={e => setText(e.target.value)} />
            </div>
            <br></br>
            <Link to="/" className="btn" onClick={createPost}>Publier</Link>
          </form>
      }
      <h2>ListOfPosts</h2>
      <div>
        {listPosts.length > 0 && listPosts.map((element) => (
            <div key={element.id}>
              <Link to={`/users/${element.user.id}`} >{element.user.username}</Link>
              <p>{element.text}</p>
              {user.id ===  element.user.id
                && <button type="button" className="btn" onClick={()=> deletePost(element.id)}>Supprimer</button>
              }
              <br></br>
              <br></br>
              <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfPosts;