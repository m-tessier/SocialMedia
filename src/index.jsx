import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'sass/styles.scss';

// PAGES
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
// import Profile from 'pages/Profile';

// COMPONENTS
import Navbar from 'components//Navbar';

const App = () => {
  console.log();

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDom.render(<App />, document.getElementById('root'));