import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import Lab2 from './lab2.js';
import Lab3 from './lab3.js';
import Lab4 from './lab4.js';
import Lab5 from './lab5.js';
import Assignment1 from './assignment1.js';
import Assignment2 from './assignment2.js';
import Assignment3 from './assignment3.js';

class App extends Component {
  render () {
    return (
      <div className="container">
        <Header />
        <Navbar className="navbar navbar-default" />
        <hr />

        <Switch>
          <Route exact path='/' render={() => (<Home />)} />
          <Route exact path='/Lab2' render={() => (<Lab2/>)} />
          <Route exact path='/Lab3' render={() => (<Lab3/>)} />
          <Route exact path='/Lab4' render={() => (<Lab4/>)} />
          <Route exact path='/Lab5' render={() => (<Lab5/>)} />
          <Route exact path='/Assignment1' render={() => (<Assignment1/>)} />
          <Route exact path='/Assignment2' render={() => (<Assignment2/>)} />
          <Route exact path='/Assignment3' render={() => (<Assignment3/>)} />
          <Route render={() => (<NotFound />)} />

        </Switch>

        <p>&nbsp;</p>
        <hr />
        <footer>
          <p>&copy; 2021, Jonathan Brown</p>
        </footer>
    </div>
    );
  }
  
  
}

export default App;


const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <h2>My Portfolio</h2>
        <h4>Jonathan Brown</h4>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <div className="container-fluid navbar-outline">
      <div className="navbar-header">
        <Link to='/' className='navbar-brand'>Home page</Link>
      </div>

      {/* <!-- All the navigation links are in the following div --> */}
      <div>
        <ul className="nav navbar-nav">
          <li>
            <Link to='/Lab2'>Lab 2</Link>
          </li>
          <li>
            <Link to='/Lab3'>Lab 3</Link>
          </li>
          <li>
            <Link to='/Lab4'>Lab 4</Link>
          </li>
          <li>
            <Link to='/Lab5'>Lab 5</Link>
          </li>
        </ul>
         <div>
         <ul className="nav navbar-nav">
           <li>
             <Link to='/Assignment1'>Assignment 1</Link>
           </li>
           <li>
             <Link to='/Assignment2'>Assignment 2</Link>
           </li>
           <li>
             <Link to='/Assignment3'>Assignment 3</Link>
           </li>
          </ul>
         </div>
      </div>
    </div>

  );
}


const Home = () => {
  return (
    <div>
      <p>This is the home page of the Portfolio.</p>
      <p>More to come</p>
      
      <p>&nbsp;</p>
    </div>
  );
}
const NotFound = () => {
  return (
    <div>
      <p>The requested resource was not found.</p>
      <p>&nbsp;</p>
    </div>
  );
}