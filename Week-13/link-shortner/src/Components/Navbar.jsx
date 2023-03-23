import React from 'react'
import { Link } from "react-router-dom"

const parentDiv = {
    height: '100px',
    backgroundColor: 'lightblue',
    display: 'flex',
    justifyContent: 'space-around'
};

const logo = {
    backgroundColor: 'grey',
    fontSize: '25px',
    fontFamily: 'fantasy',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .5,
    width: '20%'

};

const otherPage = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%'
};

const links = {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'cursive',
    alignItems: 'center',   
    listStyleType: 'none',
    margin: 0,
    padding: 0,
};

const auth = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%'
};

const list = {
    padding: '10px',
};

const Navbar = () => {
  return (
    <nav style={parentDiv}>
        <div style={logo}>Shortly</div>
        <div style={otherPage}>
        <ul style={links}>
          <li style={list}>
            <Link to="/home">Home</Link> 
          </li>
          <li style={list}>
            <Link to="/blogs">Blogs</Link> 
          </li>
          <li style={list}>
            <Link to="/contact">Contact</Link> 
          </li>
        </ul>
        </div>
        <div style={auth}>
        <ul style={links}>
          <li style={list}>
            <Link to="/login">Login</Link> 
          </li>
          <li style={list}>
            <Link to="/signup">Signup</Link> 
          </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar;