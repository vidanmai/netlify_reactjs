import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Menu from './components/Menu';
import Info from './components/Info';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="main">
          <Switch>
            <Route path="/" exact component ={Home} />
            <Route path="/meny" exact component ={Menu} />
            <Route path="/info" exact component ={Info} />
            <Route path="/blogg" component={Blog} />
            <Route path="/kontakt" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
