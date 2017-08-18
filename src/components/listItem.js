import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListItem extends Component {
  render() {    
    let innerText = this.props.name;
    let filterstring = this.props.filterstring;

    if (filterstring) {
      let index = innerText.indexOf(filterstring);
      if (index >= 0) {
        innerText = innerText.substring(0, index) +
         "<span style='background-color:yellow'>" + 
         innerText.substring(index, index + filterstring.length) +
        "</span>" + 
         innerText.substring(index + filterstring.length);
      }
    }
    
    return (
      <Link to={`${this.props.name}`} style={anchorStyle}>
        <div style={divStyle}>          
          <span dangerouslySetInnerHTML={{__html: innerText}} />
        </div>
      </Link>
    )
  }
}

const divStyle = {
  backgroundColor: '#e2e2e2',
  padding: "12px",
  display: "inline-block",
  margin: "1px",
  cursor: "pointer",
  fontWeight: "100",
  color: "rgba(0,0,0,.6)"
};

const highlight = {
  backgroundColor: "yellow"
}

const anchorStyle = {
  textDecoration: 'none',
  color: '#222'
}

export default ListItem;
