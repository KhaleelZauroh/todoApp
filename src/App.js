import React from 'react';

import './App.css';
import Completed from './Components/Completed'
import Home from './Components/Home'
import Create from './Components/Create'
import Trash from './Components/Trash'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Notfound = ({ location }) => (
  <div>
  sorry could not find a match for <code>{location.pathname}</code> please try a different path </div>

)

function App() {
  return (
    <Router>

  <div className="App">  
<Navbar />
<Switch>
<Redirect from= "/home" to = "/" />
<Route path="/" exact component={Home} />
<Route path="/create" exact  component={Create} />
<Route path="/trash" exact  component={Trash} />
<Route path="/completed" exact  component={Completed} />
<Route component={Notfound} />

</Switch>

    </div>
    </Router>
  );
}

export default App;
