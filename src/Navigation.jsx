import React, {Component} from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends Component {
  
  render(){
    return (
      <Navbar fixed="top" variant="light" className="customNav">
        <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <p>Login</p>
            </Navbar.Text>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
