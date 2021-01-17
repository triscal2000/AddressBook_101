import React from 'react';  
import './App.css';  
import ListContacts from './Pages/ListContacts'
import AddContact from './Pages/AddContact'  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
import AddEntry from './Pages/AddEntry';
function App() {  
  return (  
    <Router>      
      <div className="container">      
        <nav className="navbar navbar-expand-lg navheader">      
          <div className="collapse navbar-collapse" >      
            <ul className="navbar-nav mr-auto">      
              <li className="nav-item">      
                <Link to={'/ListContacts'} className="nav-link">Contact List</Link>      
              </li>      
              <li className="nav-item">      
                <Link to={'/AddContact'} className="nav-link">Add Contact</Link>      
              </li>      
            </ul>      
          </div>      
        </nav> <br />      
        <Switch>      
          <Route exact path='/' component={ListContacts} />      
          <Route exact path='/ListContacts' component={ListContacts} />      
          <Route path='/AddContact' component={AddContact} />
          <Route path='/AddEntry/:ContactId/:ContactName' component={AddEntry} />  
        </Switch>      
      </div>      
    </Router>     
  );  
}  
  
export default App;  