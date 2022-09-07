import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class Header extends React.Component {

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{color:"white", gap :"20px"}} >
        <Navbar.Brand><Link to="/" className="nav-link">My Favorite Books</Link></Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
        <NavItem><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
        <NavItem><Link to="/" className="nav-link"><LoginButton></LoginButton></Link></NavItem>
        <NavItem><Link to="/" className="nav-link"><LogoutButton></LogoutButton></Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}
export default Header;
