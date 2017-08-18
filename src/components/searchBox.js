import React, { Component } from 'react';

class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  changeHandler(e) {    
    this.props.handleChange && this.props.handleChange(e.target.value);        
  }
  handleKeyPress(e) { 
    if (e.key === 'Enter') {
      this.props.handleEnter && this.props.handleEnter(e.target.value);
    }
  }
  render() {    
    return (
      <input style={searchBox} type="text" value={this.props.value} onChange={this.changeHandler} onKeyPress={this.handleKeyPress} placeholder="Search" />
    )
  }
}

const searchBox = {
  width: "80%",
  fontFamily: "sans-serif",
  fontSize: "18px",
  margin: "0px auto",
  marginBottom: "20px",
  display: "block",
  fontWeight: "100"
};
export default SearchBox;
