import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import signup from './components/pages/Signup';
import Login from './components/pages/Login';

function App() {
  return (
   <>
   <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={Products} />
        <Route path='/services' exact component={Services} />
        <Route path='/sign-up' exact component={signup} />
        <Route path='/log-in' exact component={Login} />
      </Switch>
      </Router>
   </>
  );
}

export default App;
