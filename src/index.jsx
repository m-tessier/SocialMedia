import { useState } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';
import 'sass/styles.scss';

// PAGES && COMPONENTS
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import Navbar from 'components//Navbar';


const App = () => {
  const [isConnect, setIsConnect] = useState(false)

  const loginOut = () => {
    Cookies.remove('token');
    setIsConnect(false)
  };

  const loginIn = () => {
    setIsConnect(true)
  };


  console.log(Cookies.get('token'))


  return (
    <Router>
      <div className="App">
        <Navbar isConnect={isConnect} changeConnect={loginOut} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact>
            <Login isConnect={isConnect} changeConnect={loginIn} />
          </Route>
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDom.render(<App />, document.getElementById('root'));