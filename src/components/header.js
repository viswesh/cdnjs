import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo_JavaScript.png';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header style={headerStyle}>
    <img style={imgStyle} src={logo} />
    <nav>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to='/'>Home</Link></li>
        <li style={liStyle}><Link to='/analytics'>Analytics</Link></li>
      </ul>
    </nav>
  </header>
)

const headerStyle = {  
  padding: "0px",
  color: "white",
  backgroundColor: "lightblue",
  marginBottom: "10px",
  boxShadow: "0px 1px 5px rgba(1, 1, 0, .3)"
}

const ulStyle = {
  margin: "0px",
  padding: "0px",
  listStyle: "none",
  textAlign: "center",
  backgroundColor: "skyblue",
  fontSize: "15px"
}

const liStyle = {
  display: "inline-flex",
  marginRight: "20px",  
  fontSize: "1.2em",
  lineHeight: "40px"  
}

const imgStyle = {
  width: "60px",
  paddingLeft: "5px",
}

export default Header