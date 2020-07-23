import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Blog from './components/Blog';
import Nav from './components/Nav';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component ={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
