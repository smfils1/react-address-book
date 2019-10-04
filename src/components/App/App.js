import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddContactPage from '../AddContactPage/AddContactPage';
import ContactsPage from '../ContactsPage/ContactsPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar'

function App() {
  return (
<>
    <Router>     
  <NavBar/>
      <Switch>
        <Route exact path="/" render={ContactsPage}/> 
        <Route path="/add-contact" render={AddContactPage}/>    
        <Route render={ContactsPage}/>    
      </Switch>
    </Router>
</>
  );
}

export default App;
